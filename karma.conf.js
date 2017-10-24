const webpackConfig = require("./webpack.config");
const path = require('path');

delete webpackConfig.entry

module.exports = (config) => {
  config.set({
    browsers: ["PhantomJS"],
    frameworks: ["mocha", "sinon-chai", "phantomjs-shim"],
    reporters: ["spec", 'coverage-istanbul'],
    files: [
      "test/index.ts"
    ],
    preprocessors: {
      "test/index.ts": ["webpack"],
    },
    mime: {
      "text/x-typescript": ["ts", "tsx"],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'text-summary' ],
      dir: path.join(__dirname, 'coverage'),
      fixWebpackSourcePaths: true,
      'report-config': {
        html: { outdir: 'html' }
      }
    }
  })
};
