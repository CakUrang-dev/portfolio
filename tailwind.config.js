module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.35), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
    },
    extend: {
      outline: {
        black: "2px solid black",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
