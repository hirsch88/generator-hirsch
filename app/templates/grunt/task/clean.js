'use strict';

/**
 * Compile LESS files to CSS.
 */
module.exports = {

  clean: {
    temp: {
      src: [
        '<%= tempDir %>'
      ]
    },
    dist: {
      src: [
        '<%= distDir %>'
      ]
    },
    docs: {
      src: [
        '<%= docsDir %>'
      ]
    }
  }

};
