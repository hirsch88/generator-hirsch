(function() {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.services.<%= classedName %>', [
      '<%= prefix %>.core.utils.Logger'
    ])
    .service('<%= prefix %><%= classedName %>', <%= classedName %>);

  function <%= classedName %>(Logger) {
    var log = new Logger('<%= prefix %>.<%= module %>.services.<%= classedName %>');

    this.method = function() {
      return 'Hirsch says hi!';
    };

  }

}());
