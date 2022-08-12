/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["indexRes.html"],
  theme: {
    extend: {
      backgroundImage: {
        "guisos": "url('./assets/guisos.jpg')",
      },
      fontFamily: {
        'Kaushan' : ['Kaushan Script', 'cursive'],
        'Loto' : ['Lato', 'sans-serif'],
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}
