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
        primary: "#0A98D5",
        darkPrimary: "#0A709C",
        secondary: "#5320E5",
        darkSecondary: "#3B199A",
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
