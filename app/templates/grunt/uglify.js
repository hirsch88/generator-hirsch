'use strict';

var lib = require('bower-files')();

/**
 * The 'uglify' tasks also like the cssmin combines, minifies and adds a banner to our javascript files. We also
 * generat a debug file with the 'beautify' option.
 */
module.exports = {

  uglify: {

    options: {
      //banner: '<%= projectConfig.banner %>',
      mangle: {
        except: [
          'jQuery',
          'Angular',
          'angular',
          '$',
          '_'
        ]
      }
    },

    dist_bower: {
      files: {
        '<%= projectConfig.path.distDir %>/<%= projectConfig.path.appDir %>/<%= projectConfig.path.libDir %>.min.<%= projectConfig.pkg.version %>.js': lib.ext('js').files
      }
    },

    dist_app: {
      files: {
        '<%= projectConfig.path.distDir %>/<%= projectConfig.path.appDir %>/<%= projectConfig.pkg.name %>.min.<%= projectConfig.pkg.version %>.js': '<%= projectConfig.path.tempDir %>/<%= projectConfig.pkg.name %>.js'
      }
    }

  }

};
