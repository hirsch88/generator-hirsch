(function() {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.filters.<%= classedName %>', [
      '<%= prefix %>.core.utils.Logger'
    ])
    .filter('<%= prefix %><%= classedName %>', <%= classedName %>Filter);

  function <%= classedName %>Filter(Logger) {
    var log = new Logger('<%= prefix %>.<%= module %>.filters.<%= classedName %>');

    return Filter;
    ////////////////////////

    function Filter(input) {
      input = input || '';

      // code goes here

      return input + 'Filter';
    }

  }

}());
