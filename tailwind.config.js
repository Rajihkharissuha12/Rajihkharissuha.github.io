/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padd: "16px",
    },
    extend: {
      colors: {
        primary: "#22D3EE",
        dark: "#0F172A",
        secondary: "#64748B",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
