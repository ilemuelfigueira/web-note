/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8BC34A",
        darkPrimary: "#689F38",
        secondary: "#E91E63",
        darkSecondary: "#C2185B",
        gray1: "#454446",
        gray2: "#555456",
        gray3: "#666566",
        gray4: "#767576",
        white: "#FCFCFC",
        lightWhite: "#FEFBFF",
        darkWhite: "#EDEAEF",
        black: "#232224",
        lightBlack: "#353436",
        darkBlack: "#161617",
      }
    },
  },
  plugins: [],
}
