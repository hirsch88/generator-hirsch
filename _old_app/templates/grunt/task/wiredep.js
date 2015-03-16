'use strict';

var lib = require('bower-files')();

var bowerFiles = lib.ext('js').files;

bowerFiles.push.apply(bowerFiles, lib.ext('css').files);

/**
 *  grunt-wiredep
 *  is a Grunt plug-in, which finds your components and injects them directly into the HTML file you specify.
 */
module.exports = {

  wiredep: {

    app:  {
      src: '<%= srcDir %>/<%= main %>'
      // exclude: [ 'lib/bootstrap/dist/css/bootstrap.css' ]
    },
    dist: {
      src:     '<%= distDir %>/<%= main %>',
      exclude: bowerFiles
    }
  }

};

