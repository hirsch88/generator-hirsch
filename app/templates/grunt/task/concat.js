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
      dest: '<%= tempDir %>/<%= pkg.name %>.css'
    },

    dist_js: {
      src:  [
        '<%= srcDir %>/<%= app.main %>',
        '<%= srcDir %>/<%= app.modules %>',
        '<%= srcDir %>/<%= app.scripts %>'
      ],
      dest: '<%= tempDir %>/<%= pkg.name %>.js'
    }
  }

};
