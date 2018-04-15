const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const KiloByte = (kb) => kb * 1024

const cssLoaders = [
  {
    loader: 'style-loader'
  },
  {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: '[name]_[local]_[hash:base64]',
      sourceMap: true,
      minimize: true
    }
  }
]

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: cssLoaders
      },
      {
        test: /\.scss$/,
        use: cssLoaders.concat([{
          loader: 'sass-loader'
        }])
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: KiloByte(16)
        }
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/Components'),
      Containers: path.resolve(__dirname, 'src/Containers'),
      Actions: path.resolve(__dirname, 'src/Redux/Actions'),
      Reducers: path.resolve(__dirname, 'src/Redux/Reducers'),
      Utilities: path.resolve(__dirname, 'src/Utilities'),
      testUtils: path.resolve(__dirname, '__tests__/testUtils'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  plugins: [
    htmlPlugin
  ]
}
