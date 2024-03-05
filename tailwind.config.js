/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      backgroundImage: {
        stream: "url('src/assets/img/stream.png')",
        joy: "url('src/assets/img/joy.png')",
        star: "url('src/assets/img/star.png')",
      },
    },
  },
  plugins: [],
};
