import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1920px',
      
    },
    extend: {
      fontFamily: {
  inter: ['var(--font-inter)', 'sans-serif'],
  'playfair-display': ['var(--font-playfair-display)', 'serif'],
  'dmsans': ['var(--font-dmsans)', 'sans-serif'],
}
    },
  },
  plugins: [],
};
export default config;
