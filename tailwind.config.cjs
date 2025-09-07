/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // If using Vite or plain HTML
    "./src/**/*.{js,jsx,ts,tsx}", // All React component files
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",   // Nav background
          DEFAULT: "#131921", // Header
          dark: "#0F1111",    // Footer
        },
        amazon_yellow: {
          DEFAULT: "#febd69", // Button color
          dark: "#f90",       // Darker hover shade
        },
        amazon_gray: {
          light: "#f3f3f3",   // Background sections
          dark: "#e3e6e6",    // Divider
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Clean font
      },
      boxShadow: {
        "amazon-card": "0 2px 5px rgba(15, 17, 17, 0.15)",
      },
    },
  },
  plugins: [],
};
