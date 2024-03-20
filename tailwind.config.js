/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        skeleton: {
          "0%": {
            backgroundColor: "rgba(165, 165, 165, 0.25)",
          },
          "50%": {
            backgroundColor: "rgba(165, 165, 165, 0.5)",
          },
          "100%": {
            backgroundColor: "rgba(165, 165, 165, 0.25)",
          },
        },
      },
      animation: {
        skeleton: "skeleton 1.5s infinite ease-in-out",
      },
    },
    fontSize: {
      display1: [
        "84px",
        {
          fontWeight: 800,
          lineHeight: "114.24px",
          letterSpacing: "-0.84px",
        },
      ],
      display2: [
        "72px",
        {
          fontWeight: 800,
          lineHeight: "96.48px",
          letterSpacing: "-0.72px",
        },
      ],
      heading1: [
        "64px",
        {
          fontWeight: 800,
          lineHeight: "85.76px",
          letterSpacing: "-0.384px",
        },
      ],
      heading2: [
        "48px",
        {
          fontWeight: 800,
          lineHeight: "64.32px",
          letterSpacing: "-0.192px",
        },
      ],
      heading3: [
        "40px",
        {
          fontWeight: 800,
          lineHeight: "54.4px",
          letterSpacing: "-0.16px",
        },
      ],
      heading4: [
        "32px",
        {
          fontWeight: 800,
          lineHeight: "44.16px",
          letterSpacing: "-0.128px",
        },
      ],
      heading5: [
        "28px",
        {
          fontWeight: 800,
          lineHeight: "39.76px",
          letterSpacing: "-0.112px",
        },
      ],
      heading6: [
        "24px",
        {
          fontWeight: 800,
          lineHeight: "33.6px",
          letterSpacing: "-0.096px",
        },
      ],
      heading7: [
        "20px",
        {
          fontWeight: 800,
          lineHeight: "28px",
          letterSpacing: "-0.08px",
        },
      ],
      heading8: [
        "18px",
        {
          fontWeight: 800,
          lineHeight: "25.2px",
          letterSpacing: "-0.036px",
        },
      ],
      "body-600-1": [
        "24px",
        {
          fontWeight: 600,
          lineHeight: "36px",
          letterSpacing: "-0.096px",
        },
      ],
      "body-600-2": [
        "20px",
        {
          fontWeight: 600,
          lineHeight: "30px",
          letterSpacing: "-0.08px",
        },
      ],
      "body-600-3": [
        "18px",
        {
          fontWeight: 600,
          lineHeight: "27.72px",
          letterSpacing: "-0.036px",
        },
      ],
      "body-600-4": [
        "16px",
        {
          fontWeight: 600,
          lineHeight: "24px",
          letterSpacing: "-0.032px",
        },
      ],
      "body-600-5": [
        "14px",
        {
          fontWeight: 600,
          lineHeight: "20.44px",
          letterSpacing: "-0.028px",
        },
      ],
      "body-600-6": [
        "12px",
        {
          fontWeight: 600,
          lineHeight: "18px",
          letterSpacing: "-0.024px",
        },
      ],
      "body-600-7": [
        "10px",
        {
          fontWeight: 600,
          lineHeight: "14.4px",
          letterSpacing: "-0.02px",
        },
      ],
      "body-400-1": [
        "24px",
        {
          fontWeight: 400,
          lineHeight: "36px",
          letterSpacing: "-0.096px",
        },
      ],
      "body-400-2": [
        "20px",
        {
          fontWeight: 400,
          lineHeight: "30px",
          letterSpacing: "-0.08px",
        },
      ],
      "body-400-3": [
        "18px",
        {
          fontWeight: 400,
          lineHeight: "27.72px",
          letterSpacing: "-0.036px",
        },
      ],
      "body-400-4": [
        "16px",
        {
          fontWeight: 400,
          lineHeight: "24px",
          letterSpacing: "-0.032px",
        },
      ],
      "body-400-5": [
        "14px",
        {
          fontWeight: 400,
          lineHeight: "20.44px",
          letterSpacing: "-0.028px",
        },
      ],
      "body-400-6": [
        "12px",
        {
          fontWeight: 400,
          lineHeight: "18px",
          letterSpacing: "-0.024px",
        },
      ],
      "body-400-7": [
        "10px",
        {
          fontWeight: 400,
          lineHeight: "14.4px",
          letterSpacing: "-0.02px",
        },
      ],
    },
  },
  plugins: [],
};
