/** @type {import('tailwindcss').Config} */
import catppuccin from "@catppuccin/tailwindcss"
import daisyui from "daisyui"
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "background":"url('https://www.transparenttextures.com/patterns/always-grey.png')"
      }
    },
  },
  plugins: [
   catppuccin({
    // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
    // default is `false`, which means no prefix
    prefix: "ctp",
    // which flavour of colours to use by default, in the `:root`
    defaultFlavour: "mocha",
  }),
  daisyui,
],
}

