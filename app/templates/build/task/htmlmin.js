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
          '<%= distDir %>/index.html': '<%= distDir %>/index.html'
        }
      },

      dist_tpl:{
        files  : [{
          expand: true,
          cwd   : '<%= devDir %>/<%= srcDir %>',
          src   : '**/*.html',
          dest  : '<%= distDir %>/<%= srcDir %>'
        }]
      }

  }

};
