var sharedConfig = require('./karma-shared.config.js');

module.exports = function (config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
    'src/lib/angular-mocks/angular-mocks.js',

    //test files
    'test/midway/**/*.js'
  ]);

  config.set(conf);
};
