(function(){}(
    'use strict';

    angular
        .module('<%= appName %>.commen.service.<%= lowercaseName %>', [
            '<%= requirements %>'
        ])
        .factory('$<%= prefix %><%= capitalizedName %>', <%= capitalizedName %>Factroy);

    /**
     * @name $<%= prefix %><%= capitalizedName %>
     * @description
     * <%= description %>
     */
    function <%= capitalizedName %>Factroy(<%= arguments %>) {

        // code will be here
        
    }

));