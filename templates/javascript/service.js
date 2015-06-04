(function() {
  'use strict';

  angular
    .module('<%= appname %>.services.<%= classedName %>', [])
    .service('<%= prefix %><%= classedName %>', <%= classedName %>Service);

  function <%= classedName %>Service() {

    this.method = function() {
      return 'Hirsch says hi!';
    };

  }


}());
