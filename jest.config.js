const { sum } = require("./sum");

module.exports = {
    reporters: [
      'default',
      [ 'jest-junit', {
        outputDirectory: premscraper,
        outputName: sum.test.js,
      } ]
    ]
  };