'use strict';

var timestamp = new Date().getTime();

/**
 * Project Configs
 */
module.exports = function(grunt){
    return {
        pkg  : grunt.file.readJSON('./package.json'),
        bower: grunt.file.readJSON('./bower.json'),

        timestamp:timestamp,

        /**
         * The banner is the comment that is placed at the top of our compiled source files. It is first processed
         * as a Grunt template, where the `<%=` pairs are evaluated based on this very configuration object.
         */
        meta: {
            banner: '/**\n' +
            ' * @appName    <%= pkg.name %>\n' +
            ' * @version    <%= pkg.version %>\n' +
            ' * @date       <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * @copyright  <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed    <%= pkg.license %>\n' +
            ' */\n'
        }
    };
};
