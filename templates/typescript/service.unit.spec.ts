'use strict';

describe('Unit: <%= prefix %>.<%= module %>.services.<%= classedName %>Service', () => {

  beforeEach(module('<%= prefix %>.<%= module %>.services'));

  it('should contain a <%= classedName %> service',
    angular.mock.inject([<%= prefix %>.<%= module %>.services.ID.<%= classedName %>Service, service => {
      should.exist(service);
    }])
  );
});
