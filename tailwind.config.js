/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        domixa: {
          dark: '#0f172a',    // Dark Blue
          gold: '#b45309',    // Gold Accent
          gray: '#f3f4f6',    // Soft Gray
          light: '#ffffff',   // White
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
