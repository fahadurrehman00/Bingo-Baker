/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-bg": "url('/images/cardbg.png')",
      },
    },
  },
  plugins: [],
};
