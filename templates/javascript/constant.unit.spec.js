describe('Unit: <%= appname %>.constants.<%= classedName %>', function () {

  var module;
  before(function () {
    module = angular.module('<%= appname %>.constants.<%= classedName %>');
  });

  it('should be registered', function () {
    expect(module).not.to.equal(null);
  });


});
