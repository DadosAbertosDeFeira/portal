module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-montserrat)"],
        common: ["var(--font-roboto)"],
      },
      colors: {
        gray: {
          200: "#E0DEDD",
          400: "#8F8F8F",
          600: "#797979",
          800: "#444545",
        },
        blue: {
          100: "#3793DF",
          300: "#0764E3",
          500: "#0063B5",
          700: "#163E7A",
          900: "#232B4E",
        },
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "56px",
        "3xl": "80px",
        "4xl": "128px",
        "5xl": "184px",
        "6xl": "256px",
      },
      backgroundImage: {
        "city-pattern": "url('/assets/home-background.svg')",
        "waved-banner": "url('/assets/menu-banner.svg')",
        "404-background": "url('/assets/404-background.svg')",
        "peoples-right": "url('/assets/peoples-right.svg')",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
    },
  },
};
