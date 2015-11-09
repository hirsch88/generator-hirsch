/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

namespace <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${Namespace}.<%= classedName %>`, () => {

    beforeEach(angular.mock.module(ID.<%= classedName %>));
    
    let service: I<%= classedName %>;
    beforeEach(angular.mock.inject([ID.<%= classedName %>, s => service = s]));

    it('should contain a <%= classedName %> service', () => should.exist(service));
  });
}
