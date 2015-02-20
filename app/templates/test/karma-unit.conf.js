var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
    'src/lib/angular-mocks/angular-mocks.js',


    //test files
    'test/unit/**/*.js'
  ]);

  //conf.plugins = conf.plugins.concat([]);

  config.set(conf);
};

