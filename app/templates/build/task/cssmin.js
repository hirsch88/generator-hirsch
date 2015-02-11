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
                '<%= distDir %>/<%= asset.cssDir %>/<%= pkg.name %>.min.<%= timestamp %>.css': [ '<%= srcDir %>/<%= asset.css %>' ],
                '<%= distDir %>/<%= asset.cssDir %>/<%= libDir %>.min.<%= timestamp %>.css': lib.ext('css').files
            }
        }
    }
};
