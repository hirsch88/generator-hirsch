'use strict';

var lib = require('bower-files')();

/**
 * Inject references to files into other files (think scripts and stylesheets into an html file)
 */
module.exports = {
    injector: {

        app: {
            options: {
                ignorePath: 'app/',
                relative: false,
                addRootSlash: false
            },
            files: {
                '<%= devDir %>/<%= appFiles.index %>': [
                    '<%= devDir %>/<%= appFiles.css %>',
                    '<%= devDir %>/<%= appFiles.js %>'
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
              '<%= distDir %>/<%= appFiles.index %>': [
                  '<%= distDir %>/<%= appFiles.css %>',
                  '<%= distDir %>/<%= appFiles.js %>'
              ]
            }
        }
    }
};


