module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: './sum.test.js',
      outputName: './sum.js',
    } ]
  ]
};