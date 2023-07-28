/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        // sm: "5rem",
        // md: "5rem",
        // lg: "8rem",
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontSize: {},
      colors: {
        primary: "#518581",
        secondary: "#FFB23F",
        title: "#151411",
        paragraph: "#AFADB5",
        placeholder: "#F9F9F9",
        screen: {
          line: "#f3f3f3",
          white: "#ffffff",
        },
      },
      // colors: {
      //   primary: {
      //     600: "#518581",
      //     500: "#6E9996",
      //     400: "#8BAEAB",
      //     300: "#A8C2C0",
      //     200: "#C5D6D5",
      //     100: "#DCE7E6",
      //   },
      //   secondary: {
      //     600: "#FFB23F",
      //     500: "#FFBF5F",
      //     400: "#FFCC7F",
      //     300: "#FFD89F",
      //     200: "#FFE5BF",
      //     100: "#FFF0D9",
      //   },
      //   title: {
      //     600: "#151411",
      //     500: "#3C3B39",
      //     400: "#636260",
      //     300: "#8A8988",
      //     200: "#B1B1B0",
      //     100: "#D0D0CF",
      //   },
      //   paragraph: {
      //     600: "#AFADB5",
      //     500: "#BCBBC1",
      //     400: "#CAC8CE",
      //     300: "#D7D6DA",
      //     200: "#E4E4E6",
      //     100: "#EFEFF0",
      //   },
      //   placeholder: {
      //     600: "#F9F9F9",
      //     500: "#FAFAFA",
      //     400: "#FBFBFB",
      //     300: "#FCFCFC",
      //     200: "#FDFDFD",
      //     100: "#FEFEFE",
      //   },
      //   screen: {
      //     line: "#f3f3f3",
      //     white: "#ffffff",
      //   },
      // },
    },
  },
  plugins: [],
};
