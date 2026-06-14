import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#F8F9FB",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#1A1A2E",
          soft: "#4A4A5E",
        },
        slate: {
          DEFAULT: "#90A4AE",
          light: "#B0BEC5",
          pale: "#E8EDF2",
        },
        hairline: "#DDE4EA",
      },
      fontFamily: {
        sans: ["var(--font-urbanist)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(144, 164, 174, 0.15)",
        lift: "0 12px 36px rgba(144, 164, 174, 0.25)",
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
      },
      letterSpacing: {
        display: "-0.03em",
        heading: "-0.02em",
        eyebrow: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
