/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "back-showcase": `linear-gradient(135deg, ${theme(
          "colors.blue-dark"
        )} 0%, ${theme("colors.blue-light")} 100%)`,
      }),
      colors: {
        "blue-dark": "#0B1C2C",
        "blue-light": "#153B50",
      },
      boxShadow: {
        "circula-showcase": "0 0 10px rgba(0, 255, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
