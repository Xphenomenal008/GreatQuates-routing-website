export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    extend: {
      animation: {
        typing: "typing 2s steps(12, end) infinite",
        dots: "dots 1.5s steps(4, end) infinite",
        loadingBar: "loadingBar 1.5s ease-in-out infinite",
      },
      keyframes: {
        typing: {
          "0%, 100%": { width: "0ch" },
          "50%": { width: "12ch" },
        },
        dots: {
          "0%, 100%": { content: "'.'" },
          "50%": { content: "'..'" },
        },
        loadingBar: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
};
