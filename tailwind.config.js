module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "15px": "15px",
        "38px": "38px",
        30: "30rem",
      },
      maxWidth: {
        "13rem": "13rem",
        "1200px": "1200px",
      },
      minWidth: {
        "160px": "160px",
        "295px": "295px",
      },
      borderRadius: {
        "4px": "4px",
        "8px": "8px",
        "26px": "26px",
        "50%": "50%",
      },
      maxHeight: {
        "148px": "148px",
      },
      outline: {
        blue: ["2px solid #0000ff", "2px"],
      },
      zIndex: {
        1001: "1001",
        1002: "1002",
      },
      colors: {
        mainPurple: "#5D16D5",
        lightPurple: "#C7D2E9",
        inputBbg: "#F9F9FB",
        footerBg: "#F1F1F1",
        modalBg: "rgba(0, 0, 0, 0.43)",
      },
    },
    textColor: (theme) => theme("colors"),
    borderColor: (theme) => theme("colors"),
    backgroundColor: (theme) => theme("colors"),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
