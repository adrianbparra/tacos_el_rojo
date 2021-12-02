module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         skew: {
           "36": "36deg",
           "-36": "-36deg",
         },
         colors: {
          primary: "#E8D1B6",
          secondary: "#B50000"
         }
       },
       fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      },
     },
     variants: {
       extend: {
        fontSize: ['hover', 'focus'],
        position: ['hover','focus','hover::before','hover::after'],
        borderWidth: ['hover', 'focus','hover::before','hover::after'],
        borderStyle: ['hover', 'focus','hover::before','hover::after'],
        borderColor:['hover::before','hover::after'],
        margin: ['hover', 'focus'],
        width:['hover::before','hover::after'],
        display:['hover::before','hover::after'],
        height:['hover::before','hover::after'],
        zIndex:['hover::before','hover::after'],
        inset:['hover::before','hover::after'],
        transform:['hover::before','hover::after'],
        rotate:['hover::before','hover::after'],
        skew:['hover::before','hover::after'],
       },
     },
     plugins: [
      require('tailwindcss-pseudo-elements')({
        customPseudoClasses: [],
        customPseudoElements: [],
        contentUtilities: true,
        emptyContent: true,
        classNameReplacer: {
        },
      }),
     ],
   }