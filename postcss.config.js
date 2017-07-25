module.exports = {
  use: [
    'postcss-import',
    'autoprefixer',
    'cssnano',
    'postcss-cssnext'
  ],
  autoprefixer: {
    browsers: ['last 2 version']
  }
}
