'use strict';

module.exports = {

  karma: {
    unit: {
      configFile: './karma-unit.config.js',
      autoWatch:  false,
      singleRun:  true
    },
    midway: {
      configFile: './karma-midway.config.js',
      autoWatch:  false,
      singleRun:  true
    }
    //e2e: {
    //  configFile: './<%= testDir %>/karma-e2e.config.js',
    //  autoWatch:  false,
    //  singleRun:  true
    //}
  }

};
