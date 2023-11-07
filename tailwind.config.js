/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  safelist:[
    {
      pattern: /(w|h|ml)-.+/,
    },{
      pattern:/text-(2xl|xl|3xl)/
    },{
      pattern:/bg-(textPrimary|slate-100|primary)/
    }
  ],
  theme: {
    fontFamily:{
      'mant':["Mantou Sans"],
      'inter':["Inter"]
    },
    extend: {
      height:{
        'headerHeight':"6.25rem"
      },
      colors:{
        "primary":"#DA7D4A",
        "textPrimary":'#334155',
        "bgFooter":"#F7ECE1",
        "linerStart":"#E5793B",
        "linerEnd":"#FF4185",
      }
    },
  },
  plugins: [],
}

