'use strict';

/**
 * Minify HTML
 */
module.exports = {

  htmlmin: {
      options: {
        removeComments    : true,
        collapseWhitespace: true
      },

      dist_index:{
        files  : {
          '<%= distDir %>/<%= main %>': '<%= distDir %>/<%= main %>'
        }
      },

      dist_tpl:{
        files  : [{
          expand: true,
          cwd   : '<%= srcDir %>/<%= coreDir %>',
          src   : '**/*.html',
          dest  : '<%= distDir %>/<%= coreDir %>'
        }]
      }

  }

};
