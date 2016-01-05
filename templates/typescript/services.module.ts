namespace <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  export const NAMESPACE = '<%= prefix %>.<%= module %>.<%= $namespace %>';

  export const ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>: `${NAMESPACE}.<%= components[i] %>`,<% } %>
    <%= classedName %>: `${NAMESPACE}.<%= classedName %>`
  };
}
