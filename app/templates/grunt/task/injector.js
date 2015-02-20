'use strict';

//var lib = require('bower-files')();

/**
 * Inject references to files into other files (think scripts and stylesheets into an html file)
 */
module.exports = {

  injector: {

    app:  {
      options: {
        ignorePath:   '<%= srcDir %>/',
        relative:     false,
        addRootSlash: false
      },
      files:   {
        '<%= srcDir %>/<%= main %>': [
          '<%= srcDir %>/<%= asset.css %>',
          '<%= srcDir %>/<%= app.scripts %>'
        ]
      }
    },
    dist: {
      options: {
        ignorePath:   'dist/',
        relative:     false,
        addRootSlash: false
      },
      files:   {
        '<%= distDir %>/<%= main %>': [
          '<%= distDir %>/<%= asset.cssDir %>/lib.min.**.css',
          '<%= distDir %>/<%= appDir %>/lib.min.**.js',

          '<%= distDir %>/<%= asset.css %>',
          '<%= distDir %>/<%= app.scripts %>'
        ]
      }
    }
  }
};


