'use strict';

describe('Unit: <%= prefix %><%= classedName %>Controller', function () {

  var controller, scope;
  beforeEach(module(app.<%= module %>.views.<%= classedName % >.ID));

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
