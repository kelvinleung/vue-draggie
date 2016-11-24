module.exports = {
  entry: './vue-draggie.src.js',
  output: {
    path: './',
    filename: 'vue-draggie.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
