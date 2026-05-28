import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2C4A",
          50: "#F2F5F9",
          100: "#DCE3EE",
          200: "#B1BFD3",
          300: "#7E94B4",
          400: "#4F6A91",
          500: "#264A75",
          600: "#0F2C4A",
          700: "#0B2239",
          800: "#081A2C",
          900: "#05121F",
        },
        gold: {
          DEFAULT: "#C9A227",
          50: "#FBF6E5",
          100: "#F5EAB6",
          200: "#EAD37F",
          300: "#DFBD4A",
          400: "#D2AC30",
          500: "#C9A227",
          600: "#A6841E",
          700: "#7E6517",
          800: "#564510",
          900: "#2E2509",
        },
        cream: "#FAF7F2",
        ink: "#111111",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 8px 24px -8px rgba(15,44,74,0.15)",
        gold: "0 8px 24px -8px rgba(201,162,39,0.35)",
      },
      backgroundImage: {
        "navy-gradient":
          "linear-gradient(135deg, #0F2C4A 0%, #0B2239 50%, #081A2C 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
