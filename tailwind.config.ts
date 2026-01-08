import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        paper: "#FCFBFA",
        mist: "#F3F4F6",

        // Brand accents (premium + calm + beauty)
        rose: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
        },
        sage: {
          50: "#F3FAF7",
          100: "#DFF2EA",
          200: "#BFE5D6",
          300: "#9BD6C1",
          400: "#6FC2A3",
          500: "#3DAA82",
          600: "#2B8F6A",
        },
        sand: {
          50: "#FFFBF5",
          100: "#FDF2E2",
          200: "#F8DFC2",
          300: "#F1C797",
          400: "#E5A965",
        },
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,0.08)",
        glow: "0 16px 60px rgba(244,63,94,0.18)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
