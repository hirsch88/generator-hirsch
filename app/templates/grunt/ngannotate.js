'use strict';

/**
 * Add, remove and rebuild AngularJS dependency injection annotations. Based on ng-annotate.
 */
module.exports = {

  ngAnnotate: {
    options: {
      singleQuotes: true
    },
    dist:    {
      files: {
        '<%= projectConfig.path.tempDir %>/<%= projectConfig.pkg.name %>.js': ['<%= projectConfig.path.tempDir %>/<%= projectConfig.pkg.name %>.js']
      }
    }
  }

};
