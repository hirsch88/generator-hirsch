/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';
  
  class <%= classedName %>Directive implements angular.IDirective {
    restrict = '<%= restrict %>';<% if (hasTemplate) { %>
    templateUrl = '<%= templateUrl %>';<% } %><% if (hasController) { %>
    controller = ID.<%= classedName %>Controller;
    controllerAs = '<%= cameledName %>';
    bindToController = true;<% } %><% if (hasLinkFnc) { %>

    link = (scope: angular.IScope,
            instanceElement: angular.IAugmentedJQuery,
            instanceAttributes: angular.IAttributes<% if (hasController) { %>,
            controller: <%= classedName %>Controller<% } %>) => {
      // TODO: link logic
    };<% } %>
  }<% if (hasController) { %>

  export interface I<%= classedName %>Controller {
  }

  class <%= classedName %>Controller implements I<%= classedName %>Controller {
    static $inject = [];
    constructor() {
      // TODO
    }
  }<% } %>

  angular
    .module(`${Namespace}.<%= classedName %>`, [])
    .directive('<%= prefix %><%= classedName %>', () => new <%= classedName %>Directive())<% if (hasController) { %>
    .controller(ID.<%= classedName %>Controller, <%= classedName %>Controller)<% } %>;
}
