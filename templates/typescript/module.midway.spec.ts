/// <reference path="../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= cameledName %>.test {
  'use strict';

  describe('Midway: <%= prefix %>.<%= cameledName %>', () => {
    var app: ng.IModule;
    var appDeps: string[];
    var module: ng.IModule;
    var appHasModule = m => appDeps.indexOf(m) >= 0;

    before(() => {
      app = angular.module('<%= prefix %>');
      appDeps = app.value('<%= prefix %>').requires;
      module = angular.module('<%= prefix %>.<%= cameledName %>');
    });

    it('should be registered', () => should.exist(module));

    it('should be registered in the app module', function () {
      expect(appHasModule('<%= prefix %>.<%= cameledName %>')).to.equal(true);
    });

    describe('Dependencies: ', () => {
      var deps: string[];
      var hasModule = m => deps.indexOf(m) >= 0;
      before(() => deps = module.value('<%= prefix %>.<%= cameledName %>').requires);

      // it('should have <%= prefix %>.<%= cameledName %>.Nobody as a dependency', () => expect(hasModule('<%= prefix %>.<%= cameledName %>.Nobody')).to.equal(true));
    });
  });
}
