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
        .module('app', [

            'app.core',

            // w3tec Modules
            //'w3tec.core',


            // Models

            // Components

            // Services

            // App modules with business logic
            '<%= appName %>.home'


        ]);

}());
