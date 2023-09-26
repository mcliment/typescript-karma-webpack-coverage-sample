const webpackConfig = require("./webpack.config");

module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'webpack'],
    reporters: ['progress', 'coverage'],
    files: [
      'test/index.ts'
    ],
    preprocessors: {
      "test/index.ts": ["webpack"],
    },
    webpack: webpackConfig,
    coverageReporter: {
      dir : 'coverage',
      subdir: function(browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      },
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', file: 'lcov.info' },
        { type: 'text-summary' },
      ]
    },
  })
}
