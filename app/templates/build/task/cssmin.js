'use strict';
var lib = require( 'bower-files' )();
/**
 * The 'cssmin' task combines, minifies and adds a banner to our stylesheets
 */
module.exports = {
    cssmin: {
        options: {
            banner: '<%= meta.banner %>',
            keepSpecialComments: 0
        },
        dist: {
            files: {
                '<%= distDir %>/<%= cssDir %>/<%= pkg.name %>.min.<%= timestamp %>.css': [ '<%= devDir %>/<%= appFiles.css %>' ],
                '<%= distDir %>/<%= cssDir %>/lib.min.<%= timestamp %>.css': [ '<%= generatedDir %>/<%= pkg.name %>.css' ]
            }
        }
    }
};