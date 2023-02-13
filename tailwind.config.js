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
        search: '#E9E9E9'
      },
      width: {
        'post': '42rem',
        'post-xl': '38rem',
        'post-lg': '32rem',
        'post-sm': '18rem',
        'search': '45rem',
        'search-lg': '36rem',
        'search-md': '30rem',
        'search-sm': '15rem'
      },
      height: {
        'post': '16rem',
        'post-xl': '14rem',
        'post-lg': '12rem',
        'post-sm': '11rem'
      },
      boxShadow: {
        'primary': '0px 5px 15px rgba(0, 0, 0, 0.2)',
        'secondary': '0px 5px 5px rgba(0, 0, 0, 0.2)',
      }
    }
  },
  plugins: [],
}
