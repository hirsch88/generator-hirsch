'use strict';

/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 */
module.exports = {

    watch: {
        less: {
            files: [
                '<%= devDir %>/<%= appFiles.less %>'
            ],
            tasks: [
                'less'
            ],
            options: {
                spawn: false
            }
        },
        src: {
            files: [
                '<%= devDir %>/<%= appFiles.js %>'
            ],
            tasks: [
                'jshint:app',
                'injector:app'
            ],
            options: {
                spawn: false
            }
        },
        bower: {
            files: [
                './bower.json'
            ],
            tasks: [
                'wiredep:app'
            ],
            options: {
                spawn: false
            }
        }
    }

};


