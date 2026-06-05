
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {

                /* MAIN BACKGROUND */
        primary: "#000000",

        /* CARDS / NAVBAR */
        secondary: "#1F150C",

        /* BUTTONS / ACTIVE STATES */
        accent: "#412D15",

        /* TEXT */
        cream: "F6CE71",

      },

      boxShadow: {
        glow: "0 0 40px rgba(144,171,139,0.35)",
      },
    },
  },

  plugins: [],
}

