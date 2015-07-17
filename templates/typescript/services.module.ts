/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  export var Namespace = '<%= prefix %>.<%= module %>.<%= $namespace %>';

  export var ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>: `${Namespace}.<%= components[i] %>`, <% } %>
    <%= classedName %>: `${Namespace}.<%= classedName %>`
  };

  angular
    .module(Namespace, [<% for (var i = 0, l = components.length; i < l; i++) { %>
      ID.<%= components[i] %>, <% } %>
      ID.<%= classedName %>
    ]);
}
