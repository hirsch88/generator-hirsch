'use strict';

/**
 * Add, remove and rebuild AngularJS dependency injection annotations. Based on ng-annotate.
 */
module.exports = {

    ngAnnotate: {
    	options: {
            singleQuotes: true,
        },
        dist:{
        	files:{
        		'<%= tempDir %>/<%= pkg.name %>.js': ['<%= tempDir %>/<%= pkg.name %>.js']
        	}
        }
    }

};
