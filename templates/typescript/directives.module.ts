/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.directives {
  'use strict';

  export var Namespace = '<%= prefix %>.<%= module %>.directives';

  angular
    .module(Namespace, [<% for (var i = 0, l = components.length; i < l; i++) { %>
      `${Namespace}.<%= components[i] %>`,<% } %>
      `${Namespace}.<%= classedName %>`
    ]);

  export var ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>Controller: `${Namespace}.<%= components[i] %>Controller`, <% } %>
    <%= classedName %>Controller: `${Namespace}.<%= classedName %>Controller`
  };
}
