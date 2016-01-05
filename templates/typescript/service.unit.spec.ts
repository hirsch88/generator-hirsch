namespace <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${ID.<%= classedName %>}`, () => {

    beforeEach(angular.mock.module(ID.<%= classedName %>));

    let service: I<%= classedName %>;
    beforeEach(angular.mock.inject([ID.<%= classedName %>, s => service = s]));

    it('should contain a <%= classedName %> service', () => should.exist(service));
  });
}
