var projectConfig = require('./project.config.js')();

module.exports = function () {
  var config = {
    basePath:   '',
    frameworks: ['mocha', 'chai'],
    reporters:  ['progress'],
    browsers:   ['Chrome'],
    autoWatch:  true,

    // these are default values anyway
    singleRun: false,
    colors:    true,

    files: [
      //Test-Specific Code
      './node_modules/chai/chai.js',
      './test/lib/chai-should.js',
      './test/lib/chai-expect.js'
    ]
  };

  config.files = config.files.concat(
    projectConfig.karma.bower
  );

  config.files.push('./src/app/util.js');
  config.files.push('./src/app/app.js');
  config.files.push('./src/app/*/*.module.js');
  config.files.push('./src/app/*/*/*.module.js');
  config.files.push('./src/app/*/*/*/*.module.js');
  config.files.push('./src/app/*/*/*/*/*.module.js');
  config.files.push('./src/app/**/*.js');
  config.files.push('./src/app/**/*.json');
  config.files.push('./src/app/**/*.html');

  return config;
};
