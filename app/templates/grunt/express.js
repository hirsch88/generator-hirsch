'use strict';

/**
 * Express Server Tasks
 */
module.exports = {

  express: {
    /**
     * Development Version
     */
    localDevServer:  {
      options: {
        port:  3000,
        bases: '<%= projectConfig.path..srcDir %>/'
      }
    },
    /**
     * Distribution Version(minimized)
     */
    localDistServer: {
      options: {
        port:  4000,
        bases: '<%= projectConfig.path..distDir %>/'
      }
    }

  }

};
