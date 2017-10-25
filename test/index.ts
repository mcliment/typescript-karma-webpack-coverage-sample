declare var require: any;

const testsContext = require.context(".", true, /\.spec.ts$/);
testsContext.keys().forEach(testsContext);

// add all ts files to include non referenced files in report
const srcContext = require.context("../src", true, /^\.\/(?!app(\.ts)?$)/);
srcContext.keys().forEach(srcContext);
