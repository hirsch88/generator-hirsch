/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.services {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.services', [<% for (var i = 0, l = components.length; i < l; i++) { %>
      '<%= prefix %>.<%= module %>.services.<%= components[i] %>', <% } %>
      '<%= prefix %>.<%= module %>.services.<%= classedName %>Service'
    ]);

  export var ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>: '<%= prefix %>.<%= module %>.services.<%= components[i] %>', <% } %>
    <%= classedName %>Service: '<%= prefix %>.<%= module %>.services.<%= classedName %>Service'
  };
}
