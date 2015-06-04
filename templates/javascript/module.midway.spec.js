describe('Midway: Module <%= prefix %>.<%= cameledName %>', function () {

  var app, appDeps, module;
  var appHasModule = function (m) {
    return appDeps.indexOf(m) >= 0;
  };
  before(function () {
    app = angular.module('<%= prefix %>');
    appDeps = app.value('<%= prefix %>').requires;
    module = angular.module('<%= prefix %>.<%= cameledName %>');
  });

  it('should exist', function () {
    expect(module).not.to.equal(null);
  });

  it("should be registered at the app.js", function () {
    expect(appHasModule('<%= prefix %>.<%= cameledName %>')).to.equal(true);
  });

  describe('Dependencies: ', function () {
    var deps;
    var hasModule = function (m) {
      return deps.indexOf(m) >= 0;
    };
    before(function () {
      deps = module.value('<%= prefix %>.<%= cameledName %>').requires;
    });

    // it("should have <%= prefix %>.<%= cameledName %>.Nobody as a dependency", function () {
    //   expect(hasModule('<%= prefix %>.<%= cameledName %>.Nobody')).to.equal(true);
    // });


  });

});
