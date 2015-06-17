(function () {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.<%= dirName %>', [<% for (var i = 0, l = components.length; i < l; i++) { %>
      '<%= prefix %>.<%= module %>.<%= dirName %>.<%= components[i] %>',<% } %>
      '<%= prefix %>.<%= module %>.<%= dirName %>.<%= classedName %>'
    ]);

})();
