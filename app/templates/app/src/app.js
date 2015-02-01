(function(){
    'use strict';

    /**
     * ******************************************************************************************************
     *
     *  Main Application '<%= appName %>'
     *
     *  Defines our main application and specify his dependencies
     *
     *
     *  @author     <%= author %>
     *  @date       <%= date %>
     *
     * ******************************************************************************************************
     */
    angular
        .module('<%= appName %>', [

            // Angular modules
            'ngSanitize', // sanitizes html bindings
            'ngMessages', // validation messages
            'ngMaterial',
            'ngAnimate',
            'ngRoute',

            // 3rd Party Modules
            'pascalprecht.translate', // translations

            // w3tec Modules
            
            // Models
            
            // Components
            
            // Services
        
            // App modules with business logic


        ])
    /**
     * Constants
     */
        .constant('BASE_URL', 'http://localhost:1338/api/')
        .constant('PATH', {
            TEMP     : 'src/common/templates/',
            SERVICE  : 'src/common/services/',
            DIRECTIVE: 'src/common/directives/'
        })
        .config(CustomAngularConfig)
        .controller('$<%= appSign %>AppController', AppController)
        // .run(WtHttpListener)
        ;

    /**
     * @ngdoc config
     * @name CustomAngularConfig
     * @description
     * Custome angular  config
     *
     * @param $routeProvider
     * @param $httpProvider
     * @param $translateProvider
     * @constructor
     */
    function CustomAngularConfig($routeProvider, $httpProvider, $translateProvider){

        // Default route
        $routeProvider.otherwise('/event/dashboard');

        // Allows the framework to stor ehe sails cookie from the backend
        $httpProvider.defaults.withCredentials = true;
        //disable IE ajax request caching
        //$httpProvider.defaults.headers.get['If-Modified-Since'] = '0';        

        // Translation Config
        $translateProvider.useStaticFilesLoader({
            prefix: './assets/i18n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');

    }

    // /**
    //  * @ngdoc run
    //  * @name WtHttpListener
    //  * @param $wtHttp
    //  * @constructor
    //  */
    // function WtHttpListener($wtHttp){
    //     $wtHttp.$onNotFound(function(){
    //         wtAlert.warning('MESSAGE.NOT_FOUND');
    //     });

    //     $wtHttp.$onServerError(function(){
    //         wtAlert.warning('MESSAGE.SERVER_ERROR');
    //     });

    //     $wtHttp.$onForbidden(function(){
    //         wtAlert.warning('MESSAGE.FORBIDDEN');
    //     });
    // }

    /**
     * @ngdoc controller
     * @name AppController
     * @param $mdSidenav
     * @constructor
     */
    function AppController($scope, $mdSidenav){
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
    }
}());