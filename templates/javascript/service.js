app.<%= module %>.services.<%= classedName %> = (function(module) {
  'use strict';

  angular
    .module(module.ID, [])
    .service('<%= prefix %><%= classedName %>', <%= classedName %>);

  function <%= classedName %>() {

    this.method = function() {
      return 'Hirsch says hi!';
    };

  }

  return module;

}(app.<%= module %>.services.add('<%= classedName %>')));
