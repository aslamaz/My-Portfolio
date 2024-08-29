/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"selector",
  theme: {
    gridTemplateColumns: {
      'auto': 'repeat(auto-fit,minmax(200px, 1fr))'
    }
  },
  plugins: [],
  
  
}

