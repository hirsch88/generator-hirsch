'use strict';

/**
 * `jshint` defines the rules of our linter as well as which files we should check. This file, all javascript
 * sources, and all our unit tests are linted based on the policies listed in `options`. But we can also
 * specify exclusionary patterns by prefixing them with an exclamation point (!); this is useful when code comes
 * from a third party but is nonetheless inside `src/`.
 * Make sure code styles are up to par and there are no obvious mistakes
 */
module.exports = {
    jshint: {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        app    : {
            src: [
                '<%= srcDir %>/<%= app.scripts =>'
            ]
        },
        test   : {
            options: {
                jshintrc: '<%= testDir %>/.jshintrc'
            },
            src    : ['<%= testDir %>/<%= test.specs =>']
        }
    }
};
