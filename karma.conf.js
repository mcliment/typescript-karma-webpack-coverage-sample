const webpackConfig = require("./webpack.config");
const path = require('path');

const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

delete webpackConfig.entry

module.exports = (config) => {
  config.set({
    browsers: ["ChromeHeadless"],
    frameworks: ["mocha", "sinon-chai", "webpack"],
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
      reports: [ 'html', 'text-summary', 'lcovonly' ],
      dir: path.join(__dirname, 'coverage'),
      fixWebpackSourcePaths: true,
      'report-config': {
        html: { outdir: 'html' }
      }
    }
  })
};
