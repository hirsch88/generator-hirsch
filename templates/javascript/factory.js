app.<%= module %>.services.<%= classedName %> = (function(module) {
  'use strict';

  angular
    .module(module.ID, [])
    .factory('<%= prefix %><%= classedName %>', <%= classedName %>);

  function <%= classedName %>() {

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

  return module;

}(app.<%= module %>.services.add('<%= classedName %>')));
