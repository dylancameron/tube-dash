const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: {
            DEFAULT: "hsl(var(--primary-dark))",
            foreground: "hsl(var(--primary-dark-foreground))",
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          dark: {
            DEFAULT: "hsl(var(--secondary-dark))",
            foreground: "hsl(var(--secondary-dark-foreground))",
          },
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        default: {
          DEFAULT: "hsl(var(--default))",
          foreground: "hsl(var(--default-foreground))",
          dark: {
            DEFAULT: "hsl(var(--default-dark))",
            foreground: "hsl(var(--default-dark-foreground))",
          },
        },
      },
      gridTemplateColumns: {
        "2fr-1fr": "2fr 1fr",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-in",
        "fade-out": "fade-out 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--primary": theme("colors.primary.DEFAULT"),
          "--primary-foreground": theme("colors.primary.foreground"),
          "--secondary": theme("colors.secondary.DEFAULT"),
          "--secondary-foreground": theme("colors.secondary.foreground"),
          "--default": theme("colors.default.DEFAULT"),
          "--default-foreground": theme("colors.default.foreground"),
        },
        ".dark": {
          "--primary": theme("colors.primary.dark.DEFAULT"),
          "--primary-foreground": theme("colors.primary.dark.foreground"),
          "--secondary": theme("colors.secondary.dark.DEFAULT"),
          "--secondary-foreground": theme("colors.secondary.dark.foreground"),
          "--default": theme("colors.default.dark.DEFAULT"),
          "--default-foreground": theme("colors.default.dark.foreground"),
        },
      });
    },
  ],
};
