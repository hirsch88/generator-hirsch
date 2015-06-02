'use strict';

describe('Unit: <%= prefix %>.<%= module %>.filters.<%= classedName %>Filter', () => {

  beforeEach(module('<%= prefix %>.<%= module %>.filters'));

  it('should contain a <%= cameledName %> filter',
    angular.mock.inject($filter => {
      should.exist($filter(<%= prefix %>.<%= module %>.filters.ID.<%= classedName %>Filter));
    })
  );
});
