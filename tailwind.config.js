/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      color: {
        primary: "#e8ebed",
        secondary: "#828282",
        accent: "#2d7edd",
        dark: "#0f0f0f",
        black: "#000000",
        white: "#ffffff",
        red: "#c9040b"
      },
    },
    extend: {
      aspectRatio: {
        '3/4': '3 / 4',
      },
    }
  },
  plugins: [],
};
