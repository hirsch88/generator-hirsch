'use strict';

/**
 * Compile LESS files to CSS.
 */
module.exports = {

    clean: {
        temp  : {
            src: [
                '<%= tempDir %>/**/*',
                '<%= tempDir %>'
            ]
        },
        dist: {
            src: [
                '<%= distDir %>/assets',
                '<%= distDir %>/lib',
                '<%= distDir %>/src',
                '<%= distDir %>/index.html'
            ]
        }
    }

};
