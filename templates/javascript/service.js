(function() {
  'use strict';

  angular
    .module('<%= appname %>.services.<%= classedName %>', [])
    .service('<%= cameledName %>', <%= classedName %>Service);

  function <%= classedName %>Service() {

    this.method = function() {
      return 'Hirsch says hi!';
    };

  }


}());
