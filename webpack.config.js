const path = require("path");

module.exports = {
  mode: 'development',
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
        use: [
          "@jsdevtools/coverage-istanbul-loader",
          "ts-loader"
        ]
      },
    ],
  }
};