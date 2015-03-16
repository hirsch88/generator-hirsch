'use strict';

/**
 * Minify HTML
 */
module.exports = {

  htmlmin: {
    options: {
      removeComments:     true,
      collapseWhitespace: true
    },

    dist_index: {
      files: {
        '<%= projectConfig.path.distDir %>/<%= projectConfig.path.main %>': '<%= projectConfig.path.distDir %>/<%= projectConfig.path.main %>'
      }
    },

    dist_tpl: {
      files: [{
        expand: true,
        cwd:    '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.appDir %>',
        src:    '**/*.html',
        dest:   '<%= projectConfig.path.distDir %>/<%= projectConfig.path.appDir %>'
      }]
    }

  }

};
