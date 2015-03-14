'use strict';

/**
 * A grunt plugin to generate javascript doc by running jsdoc3 on your grunt projects.
 */
module.exports = {

  jsdoc: {
    app: {
      src:     [
        'src/app/*.js',
        'src/app/**/*.js'
      ],
      options: {
        destination: './docs',
        configure:   './jsdoc.json',
        //template:    './node_modules/angular-jsdoc/template'
      }
    }
  }

};
