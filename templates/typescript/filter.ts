/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prefix %>.<%= module %>.filters {
  'use strict';
  
  var <%= cameledName %> = () => {
    return (input: any) => {
      input = input || '';

      // TODO: implement filter logic

      return input;
    };
  };

  <%= cameledName %>.$inject = [];

  angular
    .module('<%= prefix %>.<%= module %>.filters.<%= classedName %>Filter', [])
    .filter(ID.<%= classedName %>Filter, <%= cameledName %>);
}
