/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${Namespace}.<%= classedName %>Filter`, () => {

    beforeEach(module(Namespace));

    var <%= cameledName %>: I<%= classedName %>Filter;
    beforeEach(inject($filter => <%= cameledName %> = $filter(ID.<%= classedName %>Filter)));

    it('should contain a <%= cameledName %> filter', () => should.exist(<%= cameledName %>));
  });
}
