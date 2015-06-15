app.<%= module %>.directives.<%= classedName %> = (function(module) {
  'use strict';

  angular
    .module(module.ID, [])
    .directive('<%= prefix %><%= classedName %>', <%= classedName %>Directive);

  function <%= classedName %>Directive() {
    return {
      restrict:         '<%= restrict %>'<% if (hasLinkFnc || hasController || hasTemplate) { %>,<% } %><% if (hasTemplate) { %>
      templateUrl:      module.templateUrl(),<% } %><% if (hasController) { %>
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

  return module;

}(app.<%= module %>.directives.add('<%= classedName %>')));
