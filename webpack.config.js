const path = require("path");

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.ts$/,
        exclude: [ path.resolve(__dirname, "test") ],
        enforce: 'post',
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        }
      }
    ],
  }
};