/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-urbanist)"],
      },
      colors: {
        "primary-lite": "#E8EDF6",
        primary: "#2D65B4",
        "primary-dark": "#02102E",
        secondary: "#F1E18E",
        "grey-lite": "#F4F4F2",
        "grey-dark": "#1C1C1C",
        "gradient-dark-blue": "#182978",
        "gradient-lite-blue": "#2D65B4",
        "gradient-lite-grey": "#E8EDF6",
        "gradient-dark-grey": "#02102E",
        "gradient-red": "#B8A540",
        "gradient-yellow": "#7ECE3F",
        "gradient-green": "#25DAE5",
        "accent-red": "#B42D2D",
        "accent-green": "#53BA02",
        "accent-blue": "#31B8EE",
        "logo-blue": " #3181DF",
        "footer-gray": "rgba(255, 255, 255, 0.4)",
        "gray-lite": "#D9D9D9",
      },
    },
  },
  plugins: [],
};
