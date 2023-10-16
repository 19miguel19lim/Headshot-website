/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#79D7FF",
        ultraLightBlue: "#d0eaf5",
        darkGray: "#1D1D1F",
        mediumGrey: "#7d828f",
        lightGrey: "#c8ccd8",
        veryLightGrey: "#eeeff4",
      },
      backgroundImage: (theme) => ({
        homeBg: "url(assets/HeroBackground.jpg)",
        gradBg: "url(assets/Gradient-Background.jpeg)",
        portBg1: "url(assets/portfolio-img1.png)",
      }),
    },
  },
  plugins: [],
};
