module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "rgb(108, 0, 162)",
        bg2: "rgb(0, 17, 82)",
        color1: "18, 113, 255",
        color2: "221, 74, 255",
        color3: "100, 220, 255",
        color4: "200, 50, 50",
        color5: "180, 180, 50",
      },
      animation: {
        moveInCircle: "moveInCircle 20s linear infinite",
        moveVertical: "moveVertical 30s ease infinite",
        moveHorizontal: "moveHorizontal 40s ease infinite",
      },
      keyframes: {
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
