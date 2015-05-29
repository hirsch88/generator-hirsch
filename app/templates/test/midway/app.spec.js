describe('Midway: Testing Modules', function () {

  describe('app.js:', function () {

    var module;
    before(function () {
      module = angular.module('<%= prompts.prefix %>');
    });

    it('should be registered', function () {
      expect(module).not.to.equal(null);
    });

    describe("Dependencies:", function () {

      var deps;
      var hasModule = function (m) {
        return deps.indexOf(m) >= 0;
      };
      before(function () {
        deps = module.value('<%= prompts.prefix %>').requires;
      });

      //you can also test the module's dependencies
      it("should have <%= prompts.prefix %>.core as a dependency", function () {
        expect(hasModule('<%= prompts.prefix %>.core')).to.equal(true);
      });

      it("should have <%= prompts.prefix %>.layout as a dependency", function () {
        expect(hasModule('<%= prompts.prefix %>.layout')).to.equal(true);
      });

      it("should have <%= prompts.prefix %>.home as a dependency", function () {
        expect(hasModule('<%= prompts.prefix %>.home')).to.equal(true);
      });

    });
  });
});
