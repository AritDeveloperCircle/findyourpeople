/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blue': {
          1000: '#02102E',
          
        },
      fontFamily: {
        sans: ["var(--font-urbanist)"],
        },
      },
    },
  },
  plugins: [],
};
