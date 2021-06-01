module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
       fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      },
     },
     variants: {
       extend: {
        fontSize: ['hover', 'focus'],
        position: ['hover','focus'],
        borderWidth: ['hover', 'focus'],
        borderStyle: ['hover', 'focus'],
        margin: ['hover', 'focus'],
       },
     },
     plugins: [],
   }