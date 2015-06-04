(function() {
  'use strict';

  angular
    .module('<%= appname %>.directives.<%= classedName %>', [])
    .directive('<%= prefix %><%= classedName %>', <%= classedName %>Directive);

  function <%= classedName %>Directive() {
    return {
      restrict:         '<%= restrict %>'<% if (hasLinkFnc || hasController || hasTemplate) { %>,<% } %><% if (hasTemplate) { %>
      templateUrl:      '<%= templateUrl %>',<% } %><% if (hasController) { %>
      controller:       <%= classedName %>Controller,
      controllerAs:     '<%= prefix %><%= classedName %>',
      bindToController: true<% } %><% if (hasLinkFnc && hasController) { %>,<% } %><% if (hasLinkFnc) { %>
      link:             <%= classedName %>Link<% } %>
    };<% if (hasLinkFnc) { %>

    function <%= classedName %>Link(scope, element, attrs) {

      // code will be here ...

    }<% } %>

  }<% if (hasController) { %>

  function <%= classedName %>Controller() {
    var vm = this;

    // code will be here ...

  }<% } %>

}());
