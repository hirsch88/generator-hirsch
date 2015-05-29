describe('Midway: <%= appname %>.<%= cameledName %>', function () {

  var module;
  before(function () {
    module = angular.module('<%= appname %>.<%= cameledName %>');
  });

  it('should be registered', function () {
    expect(module).not.to.equal(null);
  });


});
