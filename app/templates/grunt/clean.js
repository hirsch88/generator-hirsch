'use strict';

/**
 * Compile LESS files to CSS.
 */
module.exports = {

  clean: {
    temp: {
      src: [
        '<%= projectConfig.path.tempDir %>'
      ]
    },
    dist: {
      src: [
        '<%= projectConfig.path.distDir %>'
      ]
    },
    docs: {
      src: [
        '<%= projectConfig.path.docsDir %>'
      ]
    }
  }

};
