(function() {
  'use strict';

  angular
    .module('<%= appname %>.services.<%= classedName %>', [])
    .factory('<%= cameledName %>', <%= classedName %>Factory);

  function <%= classedName %>Factory() {

    var service = {
      key:    'value',

      method: method
    };

    return service;

    //////////////////////

    function method(){
      return 'Hirsch says hi!';
    }

  }


}());
