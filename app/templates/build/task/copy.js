'use strict';

/**
 * Copy files and folders.
 */
module.exports = {

  copy: {
    dist: {
      files: [
        {
          src   : ['**'],
          cwd   : '<%= devDir %>/<%= mediaDir %>',
          dest  : '<%= distDir %>/<%= mediaDir %>/',
          expand: true
        },
        {
          src   : ['**'],
          cwd   : '<%= devDir %>/<%= fontDir %>',
          dest  : '<%= distDir %>/<%= fontDir %>/',
          expand: true
        },
        {
          src   : ['*.json'],
          cwd   : '<%= devDir %>/<%= i18nDir %>',
          dest  : '<%= distDir %>/<%= i18nDir %>/',
          expand: true
        },
        {
          src   : '<%= devDir %>/<%= appFiles.index %>',
          dest  : '<%= distDir %>/<%= appFiles.index %>'
        }
      ]
    }
  }

};
