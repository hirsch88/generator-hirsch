/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

namespace <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${Namespace}.<%= classedName %>Controller`, () => {

    beforeEach(angular.mock.module(`${Namespace}.<%= classedName %>`));

    let controller: <%= classedName %>Controller;
    beforeEach(inject($controller => controller = $controller(ID.<%= classedName %>Controller)));

    it('should contain a <%= classedName %> controller', () => should.exist(controller));
  });
}
