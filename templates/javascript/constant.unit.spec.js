describe('Unit: <%= prefix %>.<%= module %>.constants.<%= classedName %>', function () {

  var module;
  before(function () {
    module = angular.module('<%= prefix %>.<%= module %>.constants.<%= classedName %>');
  });

  it('should be registered', function () {
    expect(module).not.to.equal(null);
  });


});
