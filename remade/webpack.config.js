const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background/index.js',
    contentScript: './src/contentScript/index.js',
    popup: './src/popup/index.jsx',
    newTab: './src/newTab/index.jsx',
    options: './src/options/index.jsx',
    actualInjectedScript: './src/actualInjected/index.js',
    actualBackgroundScript: './src/actualBackground/index.js',
    actualPopupScript: './src/actualPopup/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' },
        // Use clean rewrite from src/actualBackground (built as actualBackgroundScript.js entry)
        // To use obfuscated instead, add: { from: path.resolve(__dirname, '../decrypted/actualBackgroundScript_deobf.js'), to: 'actualBackgroundScript.js' },
        { from: path.resolve(__dirname, '../decrypted/actualContentScript_deobf.js'), to: 'actualContentScript.js' },
        // actualPopupScript built from src/actualPopup/ - remove next line to use obfuscated instead:
        // { from: path.resolve(__dirname, '../decrypted/actualPopupScript_deobf.js'), to: 'actualPopupScript.js' },
      ],
    }),
  ],
  optimization: {
    minimize: false,
  },
  devtool: false,
};
