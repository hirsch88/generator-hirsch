/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  export var Namespace = '<%= prefix %>.<%= module %>.<%= $namespace %>';

  angular
    .module(Namespace, [
      'ui.router',
      'ui.router.router',
      'ui.router.state'<% for (var i = 0, l = components.length; i < l; i++) { %>,
      `${Namespace}.<%= components[i] %>`<% } %>,
      `${Namespace}.<%= classedName %>`
    ]);

  export var ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>Controller: `${Namespace}.<%= components[i] %>Controller`, <% } %>
    <%= classedName %>Controller: `${Namespace}.<%= classedName %>Controller`
  };
}
