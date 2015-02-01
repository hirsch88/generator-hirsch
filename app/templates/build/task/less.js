'use strict';

/**
 * Compile LESS files to CSS.
 */
module.exports = {

    less: {
        app:{
            options: {
            },
            files: {
                '<%= devDir %>/<%= cssDir %>/<%= pkg.name %>.css': '<%= devDir %>/<%= appFiles.style %>'
            }
        }
    }

};