/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

namespace <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  export const Namespace = '<%= prefix %>.<%= module %>.<%= $namespace %>';

  export const ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>: `${Namespace}.<%= components[i] %>`, <% } %>
    <%= classedName %>: `${Namespace}.<%= classedName %>`
  };
}
