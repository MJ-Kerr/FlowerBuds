// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   mode: 'jit',
//   purge: ["./src/**/*.{js,jsx,ts,tsx}"],
//   darkMode: true,
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      FontFamily: {
      }
    },
  },
  plugins: [],
});