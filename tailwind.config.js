/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'double' : '520px',
      'triple' : '960px',
      'sm' : '640px',      
      'md' : '786px',      
      'lg' : '1024px',      
      'xl' : '1280px',      
      '2xl' : '1536',      
    },
    extend: {
      colors: {
        primary: "#BF38FF",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
