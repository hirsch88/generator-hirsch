(function() {
  'use strict';

  angular
    .module('<%= appname %>.services.<%= classedName %>', [])
    .factory('<%= prefix %><%= classedName %>', <%= classedName %>Factory);

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
