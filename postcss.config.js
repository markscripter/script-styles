const common = {
  autoprefixer: {
    browsers: ['last 2 version']
  },
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')()
  ]
}

if (process.env.NODE_ENV === 'production') {
  common.plugins.push(require('cssnano')())
}

module.exports = common
