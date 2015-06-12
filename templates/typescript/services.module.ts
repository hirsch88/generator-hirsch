/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.services {
  'use strict';

  export var Namespace = '<%= prefix %>.<%= module %>.services';

  angular
    .module(Namespace, [<% for (var i = 0, l = components.length; i < l; i++) { %>
      `${Namespace}.<%= components[i] %>`, <% } %>
      `${Namespace}.<%= classedName %>Service`
    ]);

  export var ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>: `${Namespace}.<%= components[i] %>`, <% } %>
    <%= classedName %>Service: `${Namespace}.<%= classedName %>Service`
  };
}
