/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.filters.test {
  'use strict';

  describe('Unit: <%= prefix %>.<%= module %>.filters.<%= classedName %>Filter', () => {

    beforeEach(module('<%= prefix %>.<%= module %>.filters'));

    var <%= cameledName %>: I<%= classedName %>Filter;
    beforeEach(inject($filter => <%= cameledName %> = $filter(ID.<%= classedName %>Filter)));

    it('should contain a <%= cameledName %> filter', () => should.exist(<%= cameledName %>));
  });
}
