module.exports = {
  autoprefixer: {
    browsers: ['last 2 version']
  },
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')(),
    require('cssnano')()
  ]
}