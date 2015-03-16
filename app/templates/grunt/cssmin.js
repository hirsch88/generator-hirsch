'use strict';

var lib = require('bower-files')();

/**
 * The 'cssmin' task combines, minifies and adds a banner to our stylesheets
 */
module.exports = {

  cssmin: {
    options: {
      //banner:              '<%= projectConfig.banner %>',
      keepSpecialComments: 0
    },
    dist:    {
      files: {
        '<%= projectConfig.path.distDir %>/<%= projectConfig.path.asset.cssDir %>/<%= projectConfig.pkg.name %>.min.<%= projectConfig.pkg.version %>.css': ['<%= projectConfig.path.srcDir %>/<%= projectConfig.path.asset.css %>'],
        '<%= projectConfig.path.distDir %>/<%= projectConfig.path.asset.cssDir %>/<%= projectConfig.path.libDir %>.min.<%= projectConfig.pkg.version %>.css':   lib.ext('css').files
      }
    }
  }

};
