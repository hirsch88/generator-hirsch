/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

namespace <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${Namespace}.<%= classedName %>`, () => {

    beforeEach(angular.mock.module(`${Namespace}.<%= classedName %>`));

    let <%= cameledName %>Filter: I<%= classedName %>;
    beforeEach(inject(($filter: ng.IFilterService) => <%= cameledName %>Filter = <I<%= classedName %>> $filter(ID.<%= classedName %>)));

    it('should contain a <%= cameledName %> filter', () => should.exist(<%= cameledName %>Filter));
  });
}
