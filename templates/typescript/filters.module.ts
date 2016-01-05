namespace <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  export const NAMESPACE = '<%= prefix %>.<%= module %>.<%= $namespace %>';

  angular
    .module(NAMESPACE, [<% for (var i = 0, l = components.length; i < l; i++) { %>
      `${NAMESPACE}.<%= components[i] %>`,<% } %>
      `${NAMESPACE}.<%= classedName %>`
    ]);

  export const ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>: '<%= components[i].charAt(0).toLowerCase() %><%= components[i].replace(/Filter$/, '').slice(1) %>',<% } %>
    <%= classedName %>: '<%= cameledName %>'
  };
}
