/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';<% if (hasTemplate) { %>

  const templateUrl = '<%= templateUrl %>';<% } %>
  
  export class <%= classedName %>Directive implements angular.IDirective {
    restrict = '<%= restrict %>';<% if (hasTemplate) { %>
    templateUrl = templateUrl;<% } %><% if (hasController) { %>
    controller = ID.<%= classedName %>Controller;
    controllerAs = 'vm';
    bindToController = true;<% } %><% if (hasLinkFnc) { %>

    link = (scope: ng.IScope,
            instanceElement: ng.IAugmentedJQuery,
            instanceAttributes: ng.IAttributes<% if (hasController) { %>,
            controller: <%= classedName %>Controller<% } %>) => {
      // TODO: link logic
    };<% } %><% if (hasTemplate) { %>

    static getTemplateUrl = () => templateUrl;<% } %>
  }<% if (hasController) { %>

  export class <%= classedName %>Controller {
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
