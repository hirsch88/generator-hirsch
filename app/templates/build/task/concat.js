'use strict';

var lib = require('bower-files')();

/**
 * Concatenates files
 */
module.exports = {

    concat: {

    	options: {
      		stripBanners: true,
      		separator: '\n',
  		},

        dist_css: {
            src: lib.ext('css').files,
            dest: '<%= generatedDir %>/<%= pkg.name %>.css'
        },

        dist_js: {
            src: [
     			'<%= devDir %>/<%= srcDir %>/app.js',
     			'<%= devDir %>/<%= appFiles.js %>'
   			],
            dest: '<%= generatedDir %>/<%= pkg.name %>.js'
        }
    }

};