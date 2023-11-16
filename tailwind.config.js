/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        ding: "ding .3s ease-out",
        down: "down .3s ease-out",
      },
      keyframes: {
        ding: {
          "0%": { transform: "rotateY(0deg) translateY(0)" },
          "10%": { transform: "rotateY(36deg) translateY(-1rem)" },
          "100%": { transform: "rotateY(360deg) translateY(0)" },
        },
        down: {
          "0%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(.5rem)", color: "rgb(239 68 68)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
