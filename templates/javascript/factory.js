(function() {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.services.<%= classedName %>', [
      '<%= prefix %>.core.utils.Logger'
    ])
    .factory('<%= prefix %><%= classedName %>', <%= classedName %>);

  function <%= classedName %>(Logger) {
    var log = new Logger('<%= prefix %>.<%= module %>.services.<%= classedName %>');

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
