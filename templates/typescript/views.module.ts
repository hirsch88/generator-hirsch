namespace <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  export const NAMESPACE = '<%= prefix %>.<%= module %>.<%= $namespace %>';

  angular
    .module(NAMESPACE, [
      'ui.router',
      'ui.router.router',
      'ui.router.state'<% for (var i = 0, l = components.length; i < l; i++) { %>,
      `${NAMESPACE}.<%= components[i] %>`<% } %>,
      `${NAMESPACE}.<%= classedName %>`
    ]);

  export const ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>Controller: `${NAMESPACE}.<%= components[i] %>Controller`,<% } %>
    <%= classedName %>Controller: `${NAMESPACE}.<%= classedName %>Controller`
  };
}
