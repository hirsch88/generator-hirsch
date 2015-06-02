'use strict';

describe('Unit: <%= prefix %>.<%= module %>.views.<%= classedName %>Controller', () => {

  beforeEach(module('<%= prefix %>.<%= module %>.views'));

  var controller;
  beforeEach(inject($controller => controller = $controller(<%= prefix %>.<%= module %>.views.ID.<%= classedName %>Controller)));

  it('should contain a <%= classedName %> controller', () => {
    should.exist(controller);
  });
});
