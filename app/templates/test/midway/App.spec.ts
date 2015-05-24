/// <reference path="../../typings/tsd.d.ts"/>

'use strict';

describe('Midway: Testing Modules', function () {

  describe('App Module:', function () {

    var module;
    before(function () {
      module = angular.module('app');
    });

    it('should be registered', function () {
      expect(module).not.to.equal(null);
    });

    it('should be global appUtil', function () {
      AppUtil.should.be.an('object');
      expect(AppUtil.getServerUrl()).to.be.a('string');
    });

    describe("Dependencies:", function () {

      var deps;
      var hasModule = function (m) {
        return deps.indexOf(m) >= 0;
      };
      before(function () {
        deps = module.value('appName').requires;
      });

      //you can also test the module's dependencies
      it("should have app.core as a dependency", function () {
        expect(hasModule('app.core')).to.equal(true);
      });

      it("should have app.config as a dependency", function () {
        expect(hasModule('app.config')).to.equal(true);
      });

    });
  });
});
