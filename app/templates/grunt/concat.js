'use strict';

var lib = require('bower-files')();

/**
 * Concatenates files
 */
module.exports = {

  concat: {

    options: {
      stripBanners: true,
      separator:    '\n'
    },

    dist_css: {
      src:  lib.ext('css').files,
      dest: '<%= projectConfig.path.tempDir %>/<%= projectConfig.pkg.name %>.css'
    },

    dist_js: {
      src:  [
        '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.app.main %>',
        '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.app.modules %>',
        '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.app.scripts %>'
      ],
      dest: '<%= projectConfig.path.tempDir %>/<%= projectConfig.pkg.name %>.js'
    }
  }

};
