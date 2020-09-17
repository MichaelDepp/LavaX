module.exports = {
  important: true,
  theme: {
    fontFamily: {
      sans: ['Segoe UI',],
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        primary: '#FFFFFF',
        dark: {
          100: '#031430',
          200: '#00102A'},
        button: '#304FFF',
        txtdark: '#242424',
        txtlight: '#F5F5F5',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}