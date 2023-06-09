/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "figma-purple": "#B76FFF",
        "figma-yellow": "#F9FD3D",
        "figma-grey": "#2F3E38",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        anton: ["var(--font-anton)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
