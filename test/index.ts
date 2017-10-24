declare var require: any;

const testsContext = require.context(".", true, /\.spec$/);
testsContext.keys().forEach(testsContext);
