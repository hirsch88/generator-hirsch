(function() {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.directives.<%= classedName %>', [
      '<%= prefix %>.core.utils.Logger'
    ])
    .directive('<%= prefix %><%= classedName %>', <%= classedName %>Directive);

  function <%= classedName %>Directive(<% if (hasLinkFnc) { %>Logger<% } %>) {
    return {
      restrict:         '<%= restrict %>'<% if (hasLinkFnc || hasController || hasTemplate) { %>,<% } %><% if (hasTemplate) { %>
      templateUrl:      util.templateUrl('<%= prefix %>.<%= module %>.directives.<%= classedName %>'),<% } %><% if (hasController) { %>
      controller:       <%= classedName %>Controller,
      controllerAs:     '<%= prefix %><%= classedName %>',
      bindToController: true<% } %><% if (hasLinkFnc && hasController) { %>,<% } %><% if (hasLinkFnc) { %>
      link:             <%= classedName %>Link<% } %>
    };<% if (hasLinkFnc) { %>

    function <%= classedName %>Link(scope, element, attrs) {
      var log = new Logger('<%= prefix %>.<%= module %>.directives.<%= classedName %>');

      // code will be here ...

    }<% } %>

  }<% if (hasController) { %>

  function <%= classedName %>Controller(Logger) {
    var log = new Logger('<%= prefix %>.<%= module %>.directives.<%= classedName %>');
    var vm = this;

    // code will be here ...

  }<% } %>

}());
