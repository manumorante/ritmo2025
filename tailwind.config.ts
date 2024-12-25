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
        primary: "#a4752a",
        main: colors.neutral[800],
        gray: colors.gray[600],
        facebook: "#1877f2",
      },
    },
  },
  plugins: [],
}
export default config
