import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1000px",
        xl: "1280px",
        "2xl": "1360px",
      },
      colors: {
        primary: {
          text: "rgb(48, 74, 75)",
          background: "rgb(255, 255, 255)",
        },
        secondary: {
          text: "rgb(35, 74, 75)",
        },
        dialog: {
          background: "rgb(255, 255, 255)",
        },
        border: "rgb(48, 74, 75) / 0.12",
        button: {
          background: {
            primary: "rgb(48, 74, 75)",
            secondary: "rgb(255, 255, 255)",
          },
          text: {
            primary: "rgb(255, 255, 255)",
            secondary: "rgb(48, 74, 75)",
          },
        },
        status: {
          success: {
            background: "rgb(236, 244, 239)",
            text: "rgb(95, 161, 118)",
          },
          warning: {
            background: "rgb(255, 246, 233)",
            text: "rgb(255, 183, 74)",
          },
          error: {
            background: "rgb(240, 232, 253)",
            text: "rgb(128, 60, 238)",
          },
        },
        product: {
          card: {
            background: "rgb(255, 255, 255)",
            text: "rgb(48, 74, 75)",
          },
          onSale: {
            text: "rgb(48, 74, 75)",
            badge: {
              background: "rgb(48, 74, 75)",
              text: "rgb(255, 255, 255)",
            },
          },
          soldOut: {
            badge: {
              background: "rgb(48, 74, 75)",
              text: "rgb(255, 255, 255)",
            },
          },
          primaryBadge: {
            background: "rgb(128, 60, 238)",
            text: "rgb(255, 255, 255)",
          },
          star: "rgb(255, 183, 74)",
        },
        header: {
          background: "rgb(255, 255, 255)",
          text: "rgb(48, 74, 75)",
        },
        footer: {
          background: "rgb(243, 243, 248)",
          text: "rgb(48, 74, 75)",
        },
      },
      fontFamily: {
        valueSansProBold: ["Value Sans Pro Bold", "sans-serif"],
        valueSansPro: ["Value Sans Pro", "sans-serif"],
        itcBerkeley: ["ITC Berkeley Old Style", "serif"],
        muli: ["Muli", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
