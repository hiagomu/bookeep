/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#7856FF',
        secondaryColor: '#59507D',
        primaryHoverColor: '#B4A2FD',
      },
      width: {
        'post': '42rem',
        'post-xl': '38rem',
        'post-lg': '32rem' 
      },
      height: {
        'post': '16rem',
        'post-xl': '14rem',
        'post-lg': '12rem' 
      },
      boxShadow: {
        'primary': '0px 5px 15px rgba(0, 0, 0, 0.2)',
      }
    }
  },
  plugins: [],
}
