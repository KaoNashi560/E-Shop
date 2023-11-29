/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa'],
        concert: ['Concert One']
      },
      backgroundImage: {
        hero: "url('../src/images/bg-1.jpg')",
        secondary: "url('../src/images/bg-2.jpg')",
        sm1: "url('../src/images/bg-3.jpg')",
        sm2: "url('../src/images/bg-4.jpg')"
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display:"none"
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        }
      }

      addUtilities(newUtilities)
    }
  ],
}

