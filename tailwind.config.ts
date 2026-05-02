import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 18px 45px rgba(147, 51, 234, 0.32)",
        glass: "0 24px 70px rgba(15, 23, 42, 0.1)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "service-marquee": "serviceMarquee 28s linear infinite",
        "fade-up": "fadeUp 0.75s ease-out both"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" }
        },
        serviceMarquee: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
