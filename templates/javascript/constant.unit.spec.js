describe('Unit: <%= prefix %><%= classedName %>', function () {

  var module;
  before(function () {
    module = angular.module(app.<%= module %>.constants.<%= classedName %>.ID);
  });

  it('should be registered', function () {
    expect(module).not.to.equal(null);
  });


});
