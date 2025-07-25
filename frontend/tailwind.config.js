/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🔴 Custom Colors
      colors: {
        primary: '#a32020',
        secondary: '#fef2f2',
        neutral: '#f4f4f4',
        dark: '#1f1f1f',
      },

      // 🔵 Custom Breakpoints (Responsiveness)
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

