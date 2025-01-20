import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Main_Blue: "#1B7BE8",
        Dark_Blue: "#0E4E97",
        Sky_Blue: "#5DA9FF",
        Pale_Blue_1: "#AAD2FF",
        Pale_Blue_2: "#EAF4FF",
        Blue_Grey: "#E3E8F5",
        Yellow: "#FFEFB1",
        Red: "#DF4646",
        Grey: {
          "50": "#F9FAFB",
          "100": "#F2F4F6",
          "200": "#E5E8EB",
          "300": "#D1D6DB",
          "400": "#B0B8C1",
          "500": "#8B95A1",
          "600": "#6B7684",
          "700": "#4E5968",
          "800": "#333D4B",
          "900": "#191F28",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        suite: ["var(--font-suite)"],
        suit: ["var(--font-suit)"],
      },
      screens: {
        pc: {
          min: "768px",
        },
      },
      boxShadow: {
        card: "0px 0px 20px 0px rgba(125, 125, 131, 0.2)",
        basic: "0px 0px 12.7px 0px rgba(175, 176, 187, 0.31)",
      },
      dropShadow: {
        basic: "0px 0px 12.7px rgba(175, 176, 187, 0.31)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".Headline_1": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "135%",
          letterSpacing: "-0.002rem",
        },
        ".Headline_2": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.75rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "135%",
          letterSpacing: "-0.00175rem",
        },
        ".Headline_3": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.5rem",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "135%",
          letterSpacing: "-0.0015rem",
        },
        ".Headline_4": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.5rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "135%",
          letterSpacing: "-0.0015rem",
        },
        ".Headline_5": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "135%",
          letterSpacing: "-0.00125rem",
        },
        ".Subhead_1_bold": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "135%",
          letterSpacing: "-0.00125rem",
        },
        ".Subhead_2_bold": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "1.125rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "135%",
          letterSpacing: "-0.00113rem",
        },
        ".Subhead_med": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "1.125rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "135%",
          letterSpacing: "-0.00113rem",
        },
        ".Body_1_bold": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "140%",
          letterSpacing: "-0.001rem",
        },
        ".Body_1_med": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "140%",
          letterSpacing: "-0.001rem",
        },
        ".Body_2_bold": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "140%",
          letterSpacing: "-0.00088rem",
        },
        ".Body_2_med": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "140%",
          letterSpacing: "-0.00088rem",
        },
        ".Body_2_reg": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "140%",
          letterSpacing: "-0.00088rem",
        },
        ".Caption_bold": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "0.75rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "135%",
          letterSpacing: "-0.00075rem",
        },
        ".Caption_med": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "0.75rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "135%",
          letterSpacing: "-0.00075rem",
        },
      });
    }),
    require("tailwindcss-animate"),
  ],
};

export default config;
