/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      borderColor: ['focus', 'group-focus-within'],
      backgroundColor: ['focus', 'group-focus-within'],
      placeholderColor: ['focus', 'group-focus-within'],
      scale: ['group-focus-within'],
    }
  },
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin-slow 8s linear infinite",
        "bounce-slow": "bounce-slow 3s infinite",
        gradient: "gradient 8s ease infinite",
        blob: "blob 7s infinite",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
