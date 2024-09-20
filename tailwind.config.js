/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#92E3A9', 
        primaryDark: '#74C89D', 
        primaryHover: '#7FCF94',
        secondary: '#6A9CCB', // Soft blue
        secondaryDark: '#5A85B1', 
        secondaryHover: '#7FB3E3',
      }
    },
  },
  plugins: [],
}
