( function() {
    'use strict';

    /**
     * @desc Sets the application Header
     * @example <<%= appSign %>-header></<%= appSign %>-header>
     */
    angular
        .module( 'layout.header', [] )
        .directive( '<%= appSign %>Header', Header );

    function Header() {
        return {
        	restrict: 'EA',
        	templateUrl: 'app/layout/HeaderDirective.html',
        	controller: HeaderController,
        	controllerAs: 'header',
        	bindToController: true // because the scope is isolated
        }
    }

    function HeaderController() {
    	var vm = this;
    	vm.title = '<%= appTitle %>';

    }

}() );