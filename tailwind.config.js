/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pgreen-1": "#d2e6b5",
        "pgreen-2": "#c1db9b",
        "pgreen-3": "#b1cf86",
        "pgreen-4": "#a0c172",
        "pgreen-5": "#8eb15c",
        "pgreen-6": "#182917",
        "pgreen-7": "#0f190e",
      }
    },
  },
  plugins: [],
}

