const path = require('path');

module.exports = {
  entry: {
    main: './main.js', // Основной файл для Electron
    preload: './preload.js' // Файл preload
  },
  target: 'electron-main',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    'electron': 'require("electron")'
  },
  node: {
    __dirname: false,
    __filename: false
  }
};
