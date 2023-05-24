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
        "gradient-dark-blue": "#182978",
        "gradient-lite-blue": "#2D65B4",
      },
    },
  },
  plugins: [],
};
