'use strict';

describe('Unit: <%= prefix %>.<%= module %>.services.<%= capitalizedName %>Service', () => {

  beforeEach(module('<%= prefix %>.<%= module %>.services'));

  it('should contain a <%= capitalizedName %> service',
    angular.mock.inject([<%= prefix %>.<%= module %>.services.ID.<%= capitalizedName %>Service, service => {
      should.exist(service);
    }]);
  );
});
