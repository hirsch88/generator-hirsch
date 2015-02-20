var lib = require('bower-files')();

module.exports = function() {
  var conf = {
    basePath:   '../',
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
    files: []
  };

  //3rd Party Code from bower
  conf.files = conf.files.concat(lib.ext('js').files);

  conf.files = conf.files.concat([
    //App-specific Code
    'src/app/app.js',
    'src/app/**/*.js',

    //Test-Specific Code
    'node_modules/chai/chai.js',
    'test/lib/chai-should.js',
    'test/lib/chai-expect.js'
  ]);

  return conf;
};
