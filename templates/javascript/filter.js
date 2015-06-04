(function() {
  'use strict';

  angular
    .module('<%= appname %>.filters.<%= classedName %>', [])
    .filter('<%= prefix %><%= classedName %>', <%= classedName %>Filter);

  function <%= classedName %>Filter() {

    return Filter;
    ////////////////////////

    function Filter(input) {
      input = input || '';

      // code goes here

      return input;
    }

  }


}());
