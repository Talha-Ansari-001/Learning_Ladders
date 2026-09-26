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
<<<<<<< HEAD
        "primary": "#f59e0b", // Amber 500
        "on-primary": "#ffffff",
        "primary-container": "#fef3c7", // Amber 100
        "on-primary-container": "#92400e", // Amber 800
        "primary-fixed": "#fde68a", // Amber 200
        "primary-fixed-dim": "#fbbf24", // Amber 400
        "on-primary-fixed": "#78350f", // Amber 900
        "on-primary-fixed-variant": "#d97706", // Amber 600
        
        "secondary": "#3b82f6", // Blue 500
        "on-secondary": "#ffffff",
        "secondary-container": "#dbeafe", // Blue 100
        "on-secondary-container": "#1e40af", // Blue 800
        "secondary-fixed": "#bfdbfe", // Blue 200
        "secondary-fixed-dim": "#60a5fa", // Blue 400
        "on-secondary-fixed": "#1e3a8a", // Blue 900
        "on-secondary-fixed-variant": "#2563eb", // Blue 600

        "tertiary": "#0d9488", // Teal 600
        "on-tertiary": "#ffffff",
        "tertiary-container": "#ccfbf1", // Teal 100
        "on-tertiary-container": "#115e59", // Teal 800
        "tertiary-fixed": "#99f6e4", // Teal 200
        "tertiary-fixed-dim": "#2dd4bf", // Teal 400
        "on-tertiary-fixed": "#134e4a", // Teal 900
        "on-tertiary-fixed-variant": "#0f766e", // Teal 700

        "background": "#fdfcfb",
        "on-background": "#1c1b18",
        "surface": "#fdfcfb",
        "on-surface": "#1c1b18",
        "surface-variant": "#eee8df",
        "on-surface-variant": "#4e4639",
        "outline": "#7f7667",
        "outline-variant": "#d1c5b4",
        "inverse-surface": "#32302d",
        "inverse-on-surface": "#f5f0eb",
        "inverse-primary": "#fbbf24",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#410002",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3ef",
        "surface-container": "#f0ede9",
        "surface-container-high": "#ebe7e3",
        "surface-container-highest": "#e5e2de",
        "surface-bright": "#fdfcfb",
        "surface-dim": "#dfdbd7",
        "surface-tint": "#f59e0b"
      },
      boxShadow: {
        "brand-soft": "0 10px 30px -5px rgba(245, 158, 11, 0.15), 0 4px 10px -2px rgba(245, 158, 11, 0.1)",
=======
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
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
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
<<<<<<< HEAD
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"]
=======
        "body-md": ["Literata", "serif"],
        "headline-lg": ["Literata", "serif"],
        "label-md": ["Literata", "serif"],
        "display-lg": ["Literata", "serif"],
        "headline-md": ["Literata", "serif"],
        "display-lg-mobile": ["Literata", "serif"],
        "body-lg": ["Literata", "serif"]
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
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
