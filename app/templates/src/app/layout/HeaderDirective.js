( function() {
    'use strict';

    /**
     * @desc Sets the application Header
     * @example <<%= appSign %>-header></<%= appSign %>-header>
     */
    angular
        .module( 'layout.header', [] )
        .directive( '<%= appSign %>Header', <%= appSign %>Header );

    function <%= appSign %>Header() {
        return {
        	restrict: 'EA',
        	templateUrl: 'app/layout/HeaderDirective.html',
        	controller: <%= appSign %>HeaderController,
        	controllerAs: 'header',
        	bindToController: true // because the scope is isolated
        }
    }

    function <%= appSign %>HeaderController() {
    	var vm = this;
    	vm.title = '<%= appTitle %>';

    }

}() );