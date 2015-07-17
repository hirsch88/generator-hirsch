/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${Namespace}.<%= classedName %>Controller`, () => {

    beforeEach(module(Namespace));

    var controller: I<%= classedName %>Controller;
    beforeEach(inject($controller => controller = $controller(ID.<%= classedName %>Controller)));

    it('should contain a <%= classedName %> controller', () => should.exist(controller));
  });
}
