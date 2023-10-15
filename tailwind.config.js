/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#79D7FF",
        darkGray: "#1D1D1F",
        mediumGrey: "#7d828f",
        lightGrey: "#c8ccd8",
        veryLightGrey: "#eeeff4",
      },
      backgroundImage: (theme) => ({
        homeBg: "url(./public/assets/HeroBackground.jpg)",
      }),
    },
  },
  plugins: [],
};
