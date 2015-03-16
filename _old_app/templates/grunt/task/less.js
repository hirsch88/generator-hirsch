'use strict';

/**
 * Compile LESS files to CSS.
 */
module.exports = {

  less: {
    app: {
      options: {},
      files:   {
        '<%= srcDir %>/<%= asset.cssDir %>/<%= pkg.name %>.css': '<%= srcDir %>/<%= asset.lessMain %>'
      }
    }
  }

};
