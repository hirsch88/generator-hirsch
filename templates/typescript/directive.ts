namespace <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';<% if (hasTemplate) { %>

  const templateUrl = '<%= templateUrl %>';<% } %>

  export class <%= classedName %>Directive implements angular.IDirective {
    public restrict = '<%= restrict %>';<% if (hasTemplate) { %>
    public templateUrl = templateUrl;<% } %><% if (hasController) { %>
    public controller = ID.<%= classedName %>Controller;
    public controllerAs = 'vm';
    public bindToController = true;<% } %><% if (hasLinkFnc) { %>

    public link = (scope: ng.IScope,
            instanceElement: ng.IAugmentedJQuery,
            instanceAttributes: ng.IAttributes<% if (hasController) { %>,
            controller: <%= classedName %>Controller<% } %>) => {
      // TODO: link logic
    };<% } %><% if (hasTemplate) { %>

    public static getTemplateUrl = () => templateUrl;<% } %>
  }<% if (hasController) { %>

  export class <%= classedName %>Controller {
    public static $inject = [];
    constructor() {
      // TODO
    }
  }<% } %>

  angular
    .module(`${NAMESPACE}.<%= classedName %>`, [])
    .directive('<%= prefix %><%= classedName %>', () => new <%= classedName %>Directive())<% if (hasController) { %>
    .controller(ID.<%= classedName %>Controller, <%= classedName %>Controller)<% } %>;
}
