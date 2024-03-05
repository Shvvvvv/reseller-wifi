/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      backgroundImage: {
        stream: "url('@/assets/img/stream.png')",
        joy: "url('@/assets/img/joy.png')",
        star: "url('@/assets/img/star.png')",
      },
    },
  },
  plugins: [],
};
