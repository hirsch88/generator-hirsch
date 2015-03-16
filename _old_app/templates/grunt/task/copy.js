'use strict';

/**
 * Copy files and folders.
 */
module.exports = {

  copy: {
    dist: {
      files: [
        {
          src:    ['**'],
          cwd:    '<%= srcDir %>/<%= asset.mediaDir %>',
          dest:   '<%= distDir %>/<%= asset.mediaDir %>/',
          expand: true
        },
        {
          src:    ['**'],
          cwd:    '<%= srcDir %>/<%= asset.fontDir %>',
          dest:   '<%= distDir %>/<%= asset.fontDir %>/',
          expand: true
        },
        {
          src:    ['*.json'],
          cwd:    '<%= srcDir %>/<%= asset.i18nDir %>',
          dest:   '<%= distDir %>/<%= asset.i18nDir %>/',
          expand: true
        },
        {
          src:  '<%= srcDir %>/<%= main %>',
          dest: '<%= distDir %>/<%= main %>'
        }
      ]
    }
  }

};
