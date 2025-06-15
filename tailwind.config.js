/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FFFFFF",
          foreground: "#111827",
          "foreground-muted": "#6B7280",
          card: "#000000",
          "card-foreground": "#FFFFFF",
          primary: "#4F46E5",
          // --- TAMBAHKAN INI ---
          button: "#EFEFEF",
          "button-foreground": "#111827",
          // --------------------
        },
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      keyframes: {
        "gradient-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 3s ease infinite",
      },
    },
  },
  plugins: [],
};