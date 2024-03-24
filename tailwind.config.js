/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".card-bg": {
            "background-color": "#c4e7bd",
          },
          ".btn-bg": {
            "background-color": "#effbef",
            "border-width": "0px",
          },
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ".card-bg": {
            "background-color": "#7b2cbf",
          },
          ".btn-bg": {
            "background-color": "#effbef",
            "border-width": "0px",
          },
        },
      },
    ],
  },
};
