/// <reference path="../../typings/tsd.d.ts"/>

namespace <%= prompts.prefix %>.test {
  'use strict';

  describe('Midway: Testing Modules', () => {

    describe('App Module:', () => {
      var module: ng.IModule;
      before(() => module = angular.module('<%= prompts.prefix %>'));

      it('should be registered', () => should.exist(module));

      describe('Dependencies:', () => {
        var deps: string[];
        var hasModule = m => deps.indexOf(m) >= 0;
        before(() => deps = module.value('appName').requires);

        // you can also test the module's dependencies
        it('should have <%= prompts.prefix %>.core as a dependency', () => expect(hasModule('<%= prompts.prefix %>.core')).to.equal(true));
        it('should have <%= prompts.prefix %>.home as a dependency', () => expect(hasModule('<%= prompts.prefix %>.home')).to.equal(true));
        it('should have <%= prompts.prefix %>.layout as a dependency', () => expect(hasModule('<%= prompts.prefix %>.layout')).to.equal(true));
      });
    });
  });
}
