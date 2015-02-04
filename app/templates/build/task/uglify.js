'use strict';

var lib = require('bower-files')();

/**
 * The 'uglify' tasks also like the cssmin combines, minifies and adds a banner to our javascript files. We also
 * generat a debug file with the 'beautify' option.
 */
module.exports = {

  uglify: {

    options: {
      banner: '<%= meta.banner %>',
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
        '<%= distDir %>/<%= coreDir %>/<%= libDir %>.min.<%= timestamp %>.js': lib.ext('js').files
      }
    },

    dist_app: {
      files: {
        '<%= distDir %>/<%= coreDir %>/<%= pkg.name %>.min.<%= timestamp %>.js': '<%= tempDir %>/<%= pkg.name %>.js'
      }
    }

  }

};
