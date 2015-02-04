'use strict';

var lib = require('bower-files')();

/**
 * Inject references to files into other files (think scripts and stylesheets into an html file)
 */
module.exports = {
    injector: {

        app: {
            options: {
                ignorePath: '<%= srcDir %>/',
                relative: false,
                addRootSlash: false
            },
            files: {
                '<%= srcDir %>/<%= main %>': [
                    '<%= srcDir %>/<%= asset.css %>',
                    '<%= srcDir %>/<%= core.scripts %>'
                ]
            }
        },
        dist: {
            options: {
                ignorePath: 'dist/',
                relative: false,
                addRootSlash: false
            },
            files: {
              '<%= distDir %>/<%= main %>': [
                  '<%= distDir %>/<%= asset.css %>',
                  '<%= distDir %>/<%= core.scripts %>'
              ]
            }
        }
    }
};


