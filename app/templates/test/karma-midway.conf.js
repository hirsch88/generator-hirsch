var sharedConfig = require('./../karma-shared.conf.js');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([

    //test files
    'test/midway/**/*.js'

  ]);

  //conf.plugins = conf.plugins.concat([]);

  config.set(conf);
};

