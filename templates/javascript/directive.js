app.<%= module %>.directives.<%= classedName %> = (function(module) {
  'use strict';

  angular
    .module(module.ID, [])
    .directive('<%= prefix %><%= classedName %>', <%= classedName %>Directive);

  function <%= classedName %>Directive(<% if (hasLinkFnc) { %>logger<% } %>) {
    return {
      restrict:         '<%= restrict %>'<% if (hasLinkFnc || hasController || hasTemplate) { %>,<% } %><% if (hasTemplate) { %>
      templateUrl:      module.templateUrl(),<% } %><% if (hasController) { %>
      controller:       <%= classedName %>Controller,
      controllerAs:     '<%= prefix %><%= classedName %>',
      bindToController: true<% } %><% if (hasLinkFnc && hasController) { %>,<% } %><% if (hasLinkFnc) { %>
      link:             <%= classedName %>Link<% } %>
    };<% if (hasLinkFnc) { %>

    function <%= classedName %>Link(scope, element, attrs) {
      var log = new logger('app.<%= module %>.directives.<%= classedName %>');

      // code will be here ...

    }<% } %>

  }<% if (hasController) { %>

  function <%= classedName %>Controller(logger) {
    var log = new logger('app.<%= module %>.directives.<%= classedName %>');
    var vm = this;

    // code will be here ...

  }<% } %>

  return module;

}(app.<%= module %>.directives.add('<%= classedName %>')));
