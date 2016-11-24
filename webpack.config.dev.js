const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './docs-src/main.js',
  output: {
    path: './docs',
    filename: 'bundle.js',
    publicPath: '/docs/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './docs-src/index.html',
      inject: true,
      minify: false
    })
  ],
  devServer: {
    stats: 'errors-only'
  }
}
