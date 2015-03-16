'use strict';

/**
 * Compile LESS files to CSS.
 */
module.exports = {

  less: {
    app: {
      options: {},
      files:   {
        '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.asset.cssDir %>/<%= projectConfig.pkg.name %>.css': '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.asset.lessMain %>'
      }
    }
  }

};
