module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        orangeff: '#ff9900',
        orangef8: '#f85a47',
        gray31: '#31353b',
        gray33: '#333',
        grayda: '#DADADA',
      },
      gridTemplateColumns: {
        work: '1fr auto 1fr auto 1fr',
      },
    },
  },
  plugins: [],
}
