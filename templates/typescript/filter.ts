/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts"/>

namespace <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  export interface I<%= classedName %> {
    (input: string): string;
  }
  
  export const <%= cameledName %>Filter = (): I<%= classedName %> => {
    return input => {
      input = input || '';

      // TODO: implement filter logic

      return input;
    };
  };

  <%= cameledName %>Filter.$inject = [];

  angular
    .module(`${Namespace}.<%= classedName %>`, [])
    .filter(ID.<%= classedName %>, <%= cameledName %>Filter);
}
