/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/components/*.jsx"],
  theme: {
    extend: {
      keyframes: {
        move: {
          from: {
            opacity: 0.5,
            transform: translateX("-100px"),
          },
          to: {
            opacity: 1,
            transform: translateX("0"),
          },
        },
      },
      animation: {
        "animate-onscroll": {
          animation: "move linear",
          "animation-timeline": "view()",
          "animation-range": "entry 0% cover 40%",
        },
      },
    },
  },
  plugins: [],
};
