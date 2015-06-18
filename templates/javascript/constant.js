(function () {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.constants.<%= classedName %>', [])
    .constant('<%= prefix %><%= classedName %>', 'Your Contant goes here...' );

})();
