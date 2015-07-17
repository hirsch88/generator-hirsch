/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts"/>

module <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  export interface I<%= classedName %>Filter {
    (input: string): string;
  }
  
  var <%= cameledName %> = (): I<%= classedName %>Filter => {
    return input => {
      input = input || '';

      // TODO: implement filter logic

      return input;
    };
  };

  <%= cameledName %>.$inject = [];

  angular
    .module(`${Namespace}.<%= classedName %>Filter`, [])
    .filter(ID.<%= classedName %>Filter, <%= cameledName %>);
}
