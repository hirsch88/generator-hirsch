(function() {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.services.<%= classedName %>', [])
    .service('<%= prefix %><%= classedName %>', <%= classedName %>Service);

  function <%= classedName %>Service() {

    this.method = function() {
      return 'Hirsch says hi!';
    };

  }


}());
