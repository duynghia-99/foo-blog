const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


const webpackRules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: { loader: 'babel-loader' },
  }, 
  {
    test: /\.s[ac]ss$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'sass-loader' }
    ],
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' }
    ],
  },
  {
    test: /\.(png|jpg|gif)$/i,
    use: ['file-loader'],
  },
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
];

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: webpackRules,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};