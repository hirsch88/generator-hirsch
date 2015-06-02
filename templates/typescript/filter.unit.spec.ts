'use strict';

describe('Unit: <%= prefix %>.<%= module %>.filters.<%= classedName %>Filter', () => {

  beforeEach(module('<%= prefix %>.<%= module %>.filters'));

  var <%= cameledName %>;
  beforeEach(inject($filter => <%= cameledName %> = $filter(<%= prefix %>.<%= module %>.filters.ID.<%= classedName %>Filter)));

  it('should contain a <%= cameledName %> filter', () => should.exist(<%= cameledName %>));
});
