const path = require(`path`);
const webpack = require(`webpack`);
const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': `react`,
      'PropTypes': `prop-types`,
      'PureComponent': [`react`, `PureComponent`],
      'memo': [`react`, `memo`],
    }),
    new MomentLocalesPlugin({
      localesToKeep: [`en`],
    })
  ],
};
