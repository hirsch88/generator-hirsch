'use strict';

//var lib = require('bower-files')();

/**
 * Inject references to files into other files (think scripts and stylesheets into an html file)
 */
module.exports = {

  injector: {

    app:  {
      options: {
        ignorePath:   '<%= projectConfig.path.srcDir %>/',
        relative:     false,
        addRootSlash: false
      },
      files:   {
        '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.main %>': [
          '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.asset.css %>',
          '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.app.main %>',
          '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.app.modules %>',
          '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.app.scripts %>'
        ]
      }
    },
    dist: {
      options: {
        ignorePath:   '<%= projectConfig.path.distDir %>/',
        relative:     false,
        addRootSlash: false
      },
      files:   {
        '<%= projectConfig.path.distDir %>/<%= projectConfig.path.main %>': [
          '<%= projectConfig.path.distDir %>/<%= projectConfig.path.asset.cssDir %>/lib.min.**.css',
          '<%= projectConfig.path.distDir %>/<%= projectConfig.path.appDir %>/lib.min.**.js',

          '<%= projectConfig.path.distDir %>/<%= projectConfig.path.asset.css %>',
          '<%= projectConfig.path.distDir %>/<%= projectConfig.path.app.scripts %>'
        ]
      }
    }
  }
};


