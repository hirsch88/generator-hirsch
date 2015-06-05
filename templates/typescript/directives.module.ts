/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.directives {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.directives', [<% for (var i = 0, l = components.length; i < l; i++) { %>
      '<%= prefix %>.<%= module %>.directives.<%= components[i] %>',<% } %>
      '<%= prefix %>.<%= module %>.directives.<%= classedName %>'
    ]);

  export var ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>Controller: '<%= prefix %>.<%= module %>.directives.<%= components[i] %>Controller', <% } %>
    <%= classedName %>Controller: '<%= prefix %>.<%= module %>.directives.<%= classedName %>Controller'
  };
}
