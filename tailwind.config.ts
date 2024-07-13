import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const screens = {
  ms: "320px", // Mobile Small
  mm: "375px", // Mobile Medium
  sm: "480px",
  md: "768px",
  lg: "976px",
  xl: "1440px",
}

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{tsx,mdx}",
    "./components/**/*.{tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    screens: screens,
    maxWidth: screens,
    extend: {
      colors: {
        primary: colors.pink[600],
        main: colors.neutral[800],
        gray: colors.gray[500],
        facebook: "#1877f2",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          ms: "1rem",
          sm: "2rem",
          xl: "6rem",
        },
      },
    },
  },
  plugins: [],
}
export default config
