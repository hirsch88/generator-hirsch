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
          cwd:    '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.asset.mediaDir %>',
          dest:   '<%= projectConfig.path.distDir %>/<%= projectConfig.path.asset.mediaDir %>/',
          expand: true
        },
        {
          src:    ['**'],
          cwd:    '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.asset.fontDir %>',
          dest:   '<%= projectConfig.path.distDir %>/<%= projectConfig.path.asset.fontDir %>/',
          expand: true
        },
        {
          src:    ['*.json'],
          cwd:    '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.asset.i18nDir %>',
          dest:   '<%= projectConfig.path.distDir %>/<%= projectConfig.path.asset.i18nDir %>/',
          expand: true
        },
        {
          src:  '<%= projectConfig.path.srcDir %>/<%= projectConfig.path.main %>',
          dest: '<%= projectConfig.path.distDir %>/<%= projectConfig.path.main %>'
        }
      ]
    }
  }

};
