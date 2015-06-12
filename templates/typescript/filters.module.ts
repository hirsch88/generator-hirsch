﻿/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.filters {
  'use strict';

  export var Namespace = '<%= prefix %>.<%= module %>.filters';

  angular
    .module(Namespace, [<% for (var i = 0, l = components.length; i < l; i++) { %>
      `${Namespace}.<%= components[i] %>`, <% } %>
      `${Namespace }.<%= classedName %>Filter`
    ]);

  export var ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>: '<%= components[i].charAt(0).toLowerCase() %><%= components[i].replace(/Filter$/, '').slice(1) %>', <% } %>
    <%= classedName %>Filter: '<%= cameledName %>'
  };
}
