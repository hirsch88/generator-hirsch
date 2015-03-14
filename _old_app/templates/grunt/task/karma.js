'use strict';

module.exports = {

  karma: {
    unit: {
      configFile: './<%= testDir %>/karma-unit.conf.js',
      autoWatch:  false,
      singleRun:  true
    },
    midway: {
      configFile: './<%= testDir %>/karma-midway.conf.js',
      autoWatch:  false,
      singleRun:  true
    }
    //e2e: {
    //  configFile: './<%= testDir %>/karma-e2e.conf.js',
    //  autoWatch:  false,
    //  singleRun:  true
    //}
  }

};
