import sharp from 'sharp';
import fs from 'fs';

async function perfectAlpha() {
  const cleanCutout = 'C:/Users/Admin/.gemini/antigravity/brain/6ff65ded-69e3-4ee5-a050-6612fa290f15/clean_cutout_raw.png';
  
  // 1. Get raw RGBA
  const image = sharp(cleanCutout);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  console.log(`Original cutout size: ${width}x${height}`);

  // Create an alpha array
  const alpha = new Uint8Array(width * height);
  for (let i = 0; i < width * height; i++) {
    alpha[i] = data[i * 4 + 3];
  }

  // Remove the car window patch near the bottom left (x: 180 to 220, y: 390 to 480)
  // Let's clear any non-person artifacts near the bottom
  for (let y = 390; y < height; y++) {
    for (let x = 160; x < 225; x++) {
      const idx = y * width + x;
      // The car window is dark gray with low saturation
      const r = data[idx * 4];
      const g = data[idx * 4 + 1];
      const b = data[idx * 4 + 2];
      if (r < 90 && g < 100 && b < 110) {
        alpha[idx] = 0;
        data[idx * 4 + 3] = 0;
      }
    }
  }

  // Also remove the small car door handle on bottom-left (y > 440, x < 160)
  for (let y = 430; y < height; y++) {
    for (let x = 0; x < 170; x++) {
      alpha[y * width + x] = 0;
      data[(y * width + x) * 4 + 3] = 0;
    }
  }

  // 2. Morphological Erosion on Alpha (erode by 2 pixels to strip any white/light background fringe)
  const erodedAlpha = new Uint8Array(width * height);
  const radius = 2;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let minVal = 255;
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (dx * dx + dy * dy <= radius * radius) {
            const ny = Math.min(Math.max(y + dy, 0), height - 1);
            const nx = Math.min(Math.max(x + dx, 0), width - 1);
            const val = alpha[ny * width + nx];
            if (val < minVal) minVal = val;
          }
        }
      }
      erodedAlpha[y * width + x] = minVal;
    }
  }

  // 3. Apply the eroded alpha back, and for semi-transparent edge pixels on hair, color-decontaminate
  const cleanData = Buffer.from(data);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const a = erodedAlpha[idx];
      cleanData[idx * 4 + 3] = a;

      if (a > 0 && a < 255) {
        // If near hair (top 45% of image)
        if (y < height * 0.45) {
          // Decontaminate white fringe: force RGB to match hair tone (deep dark brown/black)
          cleanData[idx * 4] = Math.min(cleanData[idx * 4], 40);
          cleanData[idx * 4 + 1] = Math.min(cleanData[idx * 4 + 1], 40);
          cleanData[idx * 4 + 2] = Math.min(cleanData[idx * 4 + 2], 40);
        }
      }
    }
  }

  // 4. Save and crop to pure chest-up (remove any bottom whitespace)
  const tempPath = 'C:/Users/Admin/.gemini/antigravity/brain/6ff65ded-69e3-4ee5-a050-6612fa290f15/clean_eroded.png';
  await sharp(cleanData, { raw: { width, height, channels } })
    .png()
    .toFile(tempPath);

  // Now create the final high-res HD version (upscaled with Lanczos3, sharpened, contrast-graded)
  const finalHD = await sharp(tempPath)
    .extract({ left: 10, top: 0, width: 466, height: 435 })
    .resize(932, 870, {
      kernel: sharp.kernel.lanczos3,
    })
    // High-pass clarity & crispness
    .sharpen({
      sigma: 1.0,
      m1: 1.2,
      m2: 2.0,
      x1: 2,
      y2: 10,
      y3: 20
    })
    // Professional color grading: rich skin tones, natural highlights
    .modulate({
      brightness: 1.01,
      saturation: 1.06,
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  const finalPath = 'C:/Users/Admin/.gemini/antigravity/brain/6ff65ded-69e3-4ee5-a050-6612fa290f15/dimitri_hd_clean.png';
  fs.writeFileSync(finalPath, finalHD);
  console.log('Saved dimitri_hd_clean.png');

  // Let's test against dark and light mode backgrounds!
  const darkBg = await sharp({
    create: {
      width: 1000,
      height: 1100,
      channels: 4,
      background: { r: 15, g: 17, b: 23, alpha: 1 } // Tailwind surface-100 / zinc-950
    }
  }).png().toBuffer();

  await sharp(darkBg)
    .composite([{ input: finalPath, gravity: 'south' }])
    .toFile('C:/Users/Admin/.gemini/antigravity/brain/6ff65ded-69e3-4ee5-a050-6612fa290f15/test_clean_dark.jpg');

  const lightBg = await sharp({
    create: {
      width: 1000,
      height: 1100,
      channels: 4,
      background: { r: 244, g: 244, b: 246, alpha: 1 } // Tailwind zinc-100
    }
  }).png().toBuffer();

  await sharp(lightBg)
    .composite([{ input: finalPath, gravity: 'south' }])
    .toFile('C:/Users/Admin/.gemini/antigravity/brain/6ff65ded-69e3-4ee5-a050-6612fa290f15/test_clean_light.jpg');

  console.log('Dark & light tests generated!');
}

perfectAlpha().catch(console.error);

