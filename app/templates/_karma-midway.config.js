var sharedConfig = require('./karma-shared.config.js');
var projectConfig = require('./project.config.js')();

module.exports = function (config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat(
    projectConfig.karma.midway
  );

  config.set(conf);
};

