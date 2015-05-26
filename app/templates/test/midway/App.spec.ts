/// <reference path="../../typings/tsd.d.ts"/>

'use strict';

describe('Midway: Testing Modules', () => {

  describe('App Module:', () => {

    var module;
    before(() => {
      module = angular.module('app');
    });

    it('should be registered', () => {
      should.exist(module);
    });

    describe("Dependencies:", () => {

      var deps;
      var hasModule = m => deps.indexOf(m) >= 0;
      before(() => {
        deps = module.value('appName').requires;
      });

      //you can also test the module's dependencies
      it("should have app.core as a dependency", () => {
        expect(hasModule('app.core')).to.equal(true);
      });

      it("should have app.config as a dependency", () => {
        expect(hasModule('app.config')).to.equal(true);
      });

      it("should have app.util as a dependency", () => {
        expect(hasModule('app.util')).to.equal(true);
      });
    });
  });
});
