import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary": "#4d644f",
        "on-primary-container": "#fffbff",
        "tertiary": "#795600",
        "surface-container-high": "#e9e8e5",
        "on-secondary-fixed-variant": "#364c39",
        "surface-container": "#efeeeb",
        "error": "#ba1a1a",
        "surface-container-highest": "#e3e2e0",
        "primary-fixed": "#ffdbd2",
        "tertiary-fixed": "#ffdea6",
        "inverse-surface": "#2f312f",
        "on-secondary-fixed": "#0a2010",
        "on-tertiary-container": "#fffbff",
        "on-error-container": "#93000a",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "on-tertiary": "#ffffff",
        "outline-variant": "#dcc0ba",
        "on-secondary-container": "#516853",
        "secondary-container": "#cce7cc",
        "surface-dim": "#dbdad7",
        "on-primary-fixed": "#3c0800",
        "surface-variant": "#e3e2e0",
        "outline": "#89726c",
        "primary-fixed-dim": "#ffb4a2",
        "surface-container-lowest": "#ffffff",
        "inverse-primary": "#ffb4a2",
        "secondary-fixed-dim": "#b3cdb4",
        "on-tertiary-fixed-variant": "#5e4200",
        "background": "#faf9f6",
        "on-background": "#1a1c1a",
        "on-tertiary-fixed": "#271900",
        "primary": "#c05c42",
        "surface-container-low": "#f4f3f1",
        "on-surface": "#1a1c1a",
        "secondary-fixed": "#cfe9cf",
        "surface-bright": "#faf9f6",
        "surface": "#faf9f6",
        "error-container": "#ffdad6",
        "on-primary-fixed-variant": "#7e2b15",
        "primary-container": "#ba573e",
        "surface-tint": "#c05c42",
        "tertiary-container": "#976d04",
        "on-surface-variant": "#56423d",
        "inverse-on-surface": "#f2f1ee",
        "tertiary-fixed-dim": "#f3be58",
        "on-primary": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "unit": "8px",
        "asymmetric-gap-sm": "2rem",
        "asymmetric-gap-lg": "6rem",
        "gutter": "24px",
        "container-padding": "5vw"
      },
      fontFamily: {
        "body-md": ["Literata", "serif"],
        "headline-lg": ["Literata", "serif"],
        "label-md": ["Literata", "serif"],
        "display-lg": ["Literata", "serif"],
        "headline-md": ["Literata", "serif"],
        "display-lg-mobile": ["Literata", "serif"],
        "body-lg": ["Literata", "serif"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
