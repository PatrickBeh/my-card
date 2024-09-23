/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#1C1C1C',
        'bg-card': '#23252C',
        'card': '#1A1B21',
        'footer': '#161619',
        'salmon': '#F3BF99',
        'linkedin': '#5093e2',
        'icons': '#918E9B',
        'copy': '#4A4E74'
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui'],
      },
    },
  },
  plugins: [],
}

