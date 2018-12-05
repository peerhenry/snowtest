const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

const entry = {
  entry: path.resolve(__dirname, 'src/main.js')
}

const output = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

const loaders = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl(us)?$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.pug$/,
        use: 'pug-plain-loader'
      }
    ]
  }
}

const plugins = {
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "My Page",
      template: 'src/index.html'
    })
  ]
}

const config = merge(
  entry,
  output,
  loaders,
  plugins,
  { mode: 'development' }
)

module.exports = config