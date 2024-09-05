const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: './.env' });

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Добавляем алиас для 'src'
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject:'body'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed)  // Подключение переменных окружения
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true, // Для использования React Router
    // добавлено
    devMiddleware: {
      publicPath: '/',
    },
  }
};
