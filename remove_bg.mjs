import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';

async function main() {
  const inputPath = 'C:/Users/Admin/.gemini/antigravity/brain/6ff65ded-69e3-4ee5-a050-6612fa290f15/dimitri_perfect_1024.jpg';
  const outPath = 'C:/Users/Admin/.gemini/antigravity/brain/6ff65ded-69e3-4ee5-a050-6612fa290f15/dimitri_transparent.png';
  const publicOutPath = 'C:/Users/Admin/Downloads/DIMI PORTFOLIO APP/dimi-portfolio/public/images/dimitri_transparent.png';

  console.log('Starting professional background removal on:', inputPath);

  const imageBuffer = fs.readFileSync(inputPath);
  const blob = new Blob([imageBuffer], { type: 'image/jpeg' });

  const resultBlob = await removeBackground(blob, {
    output: {
      format: 'image/png',
      quality: 1.0,
    },
  });

  const arrayBuffer = await resultBlob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  fs.writeFileSync(outPath, buffer);
  fs.writeFileSync(publicOutPath, buffer);
  console.log('Background removed successfully! Saved to:', outPath);
  console.log('Also copied to:', publicOutPath);
}

main().catch(err => {
  console.error('Error in removeBackground:', err);
  process.exit(1);
});
