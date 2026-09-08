import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3B82F6',
          'blue-dark': '#1D4ED8',
          'blue-light': '#60A5FA',
          silver: '#C0C0C0',
          'silver-light': '#E5E7EB'
        },
        surface: {
          DEFAULT: '#0A0A0A',
          '50': '#111111',
          '100': '#1A1A1A',
          '200': '#222222',
          '300': '#2A2A2A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      screens: {
        'xs': '375px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        textReveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        lineGrow: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        textReveal: 'textReveal 0.5s ease-out forwards',
        lineGrow: 'lineGrow 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}
export default config
