const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        Pufr: {
          50: "#F1F3F9",
          100: "#E2E6F3",
          200: "#C1CAE6",
          300: "#9CACD8",
          400: "#607CC3",
          500: "#0F172A",
          600: "#11192C",
          700: "#11182C",
          800: "#1C2645",
          900: "#1D2644",
          950: "#1E2643",
          1000: "#7F81B8",
          1500: "#1f4faf",
        },
        deep: {
          DEFAULT: "#0F2A48",
          50: "#F4F6F9",
          100: "#E6EAF1",
          200: "#C1CDE3",
          300: "#90A3C9",
          400: "#5E79AD",
          500: "#0F2A48", // Primary
          600: "#0C223A",
          700: "#09192C",
          800: "#06111E",
          900: "#030810",
        },
        cloud: {
          DEFAULT: "#2D7DD2",
          50: "#F0F7FC",
          100: "#DDECF9",
          200: "#BDD9F3",
          300: "#9BC5EC",
          400: "#79B0E6",
          500: "#2D7DD2", // Secondary
          600: "#2263A8",
          700: "#18497D",
          800: "#0E2F53",
          900: "#041628",
        },
        spark: {
          DEFAULT: "#9063CD",
          50: "#F6F3FB",
          100: "#EBE5F7",
          200: "#D5CBEF",
          300: "#BFB2E7",
          400: "#A998DF",
          500: "#9063CD", // Accent
          600: "#734FA4",
          700: "#563B7B",
          800: "#392752",
          900: "#1C1429",
        },
        air: {
          DEFAULT: "#F4F7FB", // Background
        },
        slate: {
          DEFAULT: "#334155", // Body Text
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = config;
