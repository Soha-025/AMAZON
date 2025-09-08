/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // Vite / plain HTML
    "./src/**/*.{js,jsx,ts,tsx}" // React files
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",   // Navbar
          DEFAULT: "#131921", // Header
          dark: "#0F1111",    // Footer
        },
        amazon_yellow: {
          DEFAULT: "#febd69", // Buttons
          dark: "#f90",       // Hover
        },
        amazon_gray: {
          light: "#f3f3f3",   // Background
          dark: "#e3e6e6",    // Divider
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "amazon-card": "0 2px 5px rgba(15, 17, 17, 0.15)",
      },
    },
  },
  plugins: [],
};
