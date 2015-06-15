/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.services {
  'use strict';

  export var Namespace = '<%= prefix %>.<%= module %>.services';

  export var ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>: `${Namespace}.<%= components[i] %>`, <% } %>
    <%= classedName %>Service: `${Namespace}.<%= classedName %>Service`
  };

  angular
    .module(Namespace, [<% for (var i = 0, l = components.length; i < l; i++) { %>
      ID.<%= components[i] %>, <% } %>
      ID.<%= classedName %>Service
    ]);
}
