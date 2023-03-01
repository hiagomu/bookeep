/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#7856FF',
        primaryDarkColor: '#101112',
        secondaryColor: '#59507D',
        secondaryDarkColor: '#1B1E1F',
        primaryHoverColor: '#B4A2FD',
        primaryDarkHoverColor: '#3F4448',
        modalDarkColor: '#2A2634',
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
        'search-sm': '15rem',
        'post-modal': '33.75rem',
        'input-lg': '28rem',
        'input-md': '20rem',
        'input-2sm': '16rem',
        'input-sm': '13.5rem',
        'input-xs': '9.5rem',
        'input-xxs': '7.5rem'
      },
      height: {
        'post': '16rem',
        'post-xl': '14rem',
        'post-lg': '12rem',
        'post-sm': '11rem',
        'input': '2.25rem',
        'post-modal': '42rem',
        'textarea': '5rem'
      },
      boxShadow: {
        'primary': '0px 5px 15px rgba(0, 0, 0, 0.2)',
        'secondary': '0px 5px 5px rgba(0, 0, 0, 0.2)',
        'dark-secondary': '0px 0px 15px rgba(255, 255, 255, 0.2)'
      }
    }
  },
  plugins: [],
}
