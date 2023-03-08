/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    


    extend: {
      colors: {
        black: '#000000',
        Slate: '#f8fafc',
        transparent: 'transparent',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        bubble_gum: '#ff77e9',
        bermuda: '#78dcca',
        off_white: '#C8F2FD',
        off_arch: '#B7B7B7',
        pink: '#FF52BF',
        cyan: '#00252E',
        hover: '#FF9BDB',
      },

      theme: {
        backgroundImage: {
          // 'hero_right': "url('/images/bg-hero-desktop.svg')",
          // 'hero_left': "url('images.logo.svg')",
        },
      }

    },
  },
  plugins: [],
}
