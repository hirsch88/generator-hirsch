module.exports = function () {

  var projectConfig = require('./project.config.js')();

  var conf = {
    frameworks: ['mocha', 'chai'],
    reporters:  ['progress'],
    browsers:   ['Firefox'],
    autoWatch:  true,

    // these are default values anyway
    singleRun:  false,
    colors:     true,

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],
    files:   []
  };

  // angular script files & 3rd party code from bower
  conf.files = conf.files.concat(
    projectConfig.karma.files
  );

  conf.files = conf.files.concat([
    'node_modules/chai/chai.js',
    'test/lib/chai-should.js',
    'test/lib/chai-expect.js'
  ]);

  return conf;
};