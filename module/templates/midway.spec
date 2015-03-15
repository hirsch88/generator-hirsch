describe('Midway: <%= meta.lowercaseName %>', function () {

  var module;
  before(function () {
    module = angular.module('<%= meta.lowercaseName %>');
  });

  it('should be registered', function () {
    expect(module).not.to.equal(null);
  });




});
