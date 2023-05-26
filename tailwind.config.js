module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      xsm: "540px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1536px",
      "4xl": "1792px",
    },
    extend: {
      colors: {
        primaryColor: "#97C9D5",
        blackText: "#707070",
        pinkColor: "#E8BCCD",
        bgPink: "#FFFDEA",
        bgBlue: "#FAFAFA",
        bgGray: "#b7b7b7",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
