/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        skeleton: {
          "0%": {
            backgroundColor: "rgba(165, 165, 165, 0.25)",
          },
          "50%": {
            backgroundColor: "rgba(165, 165, 165, 0.5)",
          },
          "100%": {
            backgroundColor: "rgba(165, 165, 165, 0.25)",
          },
        },
      },
      animation: {
        skeleton: "skeleton 1.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
