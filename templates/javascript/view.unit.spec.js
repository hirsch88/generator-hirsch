'use strict';

describe('Unit: <%= prefix %>.<%= module %>.views.<%= classedName %>', function () {

  var controller, scope;
  beforeEach(module('<%= prefix %>'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('<%= prefix %><%= classedName %>Controller', {
      $scope: scope
    });
  }));

  it('should have a <%= prefix %><%= classedName %>Controller', function() {
    expect(controller).not.to.equal(null);
  });


});
