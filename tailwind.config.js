/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "blue": "#7289da",
      "teal": "#2d90fa",
      "red": "#a83240",
      "white": "#ffffff",
      "gray": "#99aab5",
      "dark-gray": "#36393e",
      "black": "	#23272a",
    }
  },
  plugins: [],
};
