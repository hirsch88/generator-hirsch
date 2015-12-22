namespace <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  // TODO: adjust types
  export interface I<%= classedName %> {
    (input: string): string;
  }

  export const <%= cameledName %>Filter = (): I<%= classedName %> =>
    input => {
      input = input || '';

      // TODO: implement filter logic

      return input;
    };

  <%= cameledName %>Filter.$inject = [];

  angular
    .module(`${Namespace}.<%= classedName %>`, [])
    .filter(ID.<%= classedName %>, <%= cameledName %>Filter);
}
