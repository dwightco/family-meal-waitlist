import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    fontSize: {
      xs: ".8rem",
      sm: ".9rem",
      base: "1rem",
      md: "1.1rem",
      lg: "1.2rem",
      xl: "1.3rem",
      "2xl": "1.4rem",
      "3xl": "1.55rem",
      "4xl": "1.75rem",
      "5xl": "2rem",
      "6xl": "2.4rem",
      "7xl": "2.9rem",
      "8xl": "clamp(3rem,3.5vw,3.8rem)",
      "9xl": "clamp(3.3rem,3.8vw,4.4rem)",
    },
    letterSpacing: {
      wide: ".035em",
      wider: ".08em",
      widest: ".15em",
    },
    extend: {
      fontSize: {
        "3xs": "11px",
        "2xs": ".75rem",
        "10xl": "clamp(4rem,4vw,4.8rem)",
        "11xl": "clamp(4.6rem,4.4vw,5.2rem)",
        "12xl": "clamp(5.2rem,4.7vw,6.2rem)",
        "tremor-label": "0.75rem",
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      fontFamily: {
        sans: ["var(--font-rumiko-sans)"],
        display: ["var(--font-motter-corpus)"],
        mono: ["var(--font-space-mono)"],
        data: ["var(--font-inter)"],
      },
      lineHeight: {
        "very-tight": "1.1",
        "very-loose": "2.125",
        12: "3rem",
      },
      boxShadow: {
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.75rem",
        "tremor-full": "9999px",
      },
      colors: {
        fam: {
          black: {
            DEFAULT: "var(--fam-black)",
            lighter: "var(--fam-black-lighter)",
            light: "var(--fam-black-light)",
            dark: "var(--fam-black-dark)",
          },
          white: {
            DEFAULT: "var(--fam-white)",
            light: "var(--fam-white-light)",
            dark: "var(--fam-white-dark)",
            darker: "var(--fam-white-darker)",
          },
          orange: {
            DEFAULT: "var(--fam-orange)",
            light: "var(--fam-orange-light)",
            dark: "var(--fam-orange-dark)",
          },
          blue: {
            DEFAULT: "var(--fam-blue)",
            light: "var(--fam-blue-light)",
            dark: "var(--fam-blue-dark)",
          },
          brown: {
            DEFAULT: "var(--fam-brown)",
            light: "var(--fam-brown-light)",
            dark: "var(--fam-brown-dark)",
          },
          success: "var(--fam-success)",
          error: "var(--fam-error)",
        },
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "var(--fam-black-light)", // blue-400
            DEFAULT: "var(--fam-black)", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "var(--fam-white-dark)", // gray-100
            DEFAULT: "var(--fam-white-light)", // white
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          ring: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          content: {
            subtle: "var(--fam-black-lighter)", // gray-400
            DEFAULT: "var(--fam-black-light)", // gray-500
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229", // custom
            muted: "#172554", // blue-950
            subtle: "#1e40af", // blue-800
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#60a5fa", // blue-400
            inverted: "#030712", // gray-950
          },
          background: {
            muted: "#131A2B", // custom
            subtle: "#1f2937", // gray-800
            DEFAULT: "#111827", // gray-900
            emphasis: "#d1d5db", // gray-300
          },
          border: {
            DEFAULT: "#1f2937", // gray-800
          },
          ring: {
            DEFAULT: "#1f2937", // gray-800
          },
          content: {
            subtle: "#4b5563", // gray-600
            DEFAULT: "#6b7280", // gray-500
            emphasis: "#e5e7eb", // gray-200
            strong: "#f9fafb", // gray-50
            inverted: "#000000", // black
          },
        },
      },
      keyframes: {
        beat: {
          "0%, 50%, 100%": { transform: "scale(1, 1)" },
          "30%, 80%": { transform: "scale(0.95, 0.95)" },
        },
      },
      animation: {
        heartbeat: "beat 2s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
