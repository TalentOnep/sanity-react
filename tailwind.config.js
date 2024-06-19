module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 0.3s ease-in-out 1',
        show: 'show 1s ease-in-out 1',
        hidden: 'hidden 1s ease-in-out 1'
      },
      keyframes: {
        show: {
          '0%': { position: "absolute", right: "-300px" },
          '90%': { position: "absolute", right: "10px" },
          '100%': { position: "absolute", right: "0" },
        },
        hidden: {
          '0%': { position: "absolute", right: "0" },
          '10%': { position: "absolute", right: "10px" },
          '100%': { position: "absolute", right: "-300px" },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}