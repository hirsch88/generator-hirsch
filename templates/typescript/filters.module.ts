/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.filters {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.filters', [<% for (var i = 0, l = components.length; i < l; i++) { %>
      '<%= prefix %>.<%= module %>.filters.<%= components[i] %>', <% } %>
      '<%= prefix %>.<%= module %>.filters.<%= classedName %>Filter'
    ]);

  export var ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>: '<%= components[i].charAt(0).toLowerCase() %><%= components[i].replace(/Filter$/, '').slice(1) %>', <% } %>
    <%= classedName %>Filter: '<%= cameledName %>'
  };
}
