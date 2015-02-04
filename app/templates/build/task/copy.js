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
          cwd   : '<%= srcDir %>/<%= mediaDir %>',
          dest  : '<%= distDir %>/<%= mediaDir %>/',
          expand: true
        },
        {
          src   : ['**'],
          cwd   : '<%= srcDir %>/<%= fontDir %>',
          dest  : '<%= distDir %>/<%= fontDir %>/',
          expand: true
        },
        {
          src   : ['*.json'],
          cwd   : '<%= srcDir %>/<%= i18nDir %>',
          dest  : '<%= distDir %>/<%= i18nDir %>/',
          expand: true
        },
        {
          src   : '<%= srcDir %>/<%= main %>',
          dest  : '<%= distDir %>/<%= main %>'
        }
      ]
    }
  }

};
