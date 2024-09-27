/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/components/*.jsx"],
  theme: {
    extend: {
      // Space for a better readability

      animation: {
        onscroll: {
          animation: "move linear 2s",
          "animation-timeline": "view()",
          "animation-range": "entry 0% cover 40%",
        },
      },
    },
    plugins: [],
  },
};
