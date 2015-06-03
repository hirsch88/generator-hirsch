/// <reference path="../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.test {
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

        //you can also test the module's dependencies
        it('should have app.core as a dependency', () => {
          expect(hasModule('<%= prompts.prefix %>.core')).to.equal(true);
        });

        it('should have app.config as a dependency', () => {
          expect(hasModule('<%= prompts.prefix %>.home')).to.equal(true);
        });

        it('should have app.util as a dependency', () => {
          expect(hasModule('<%= prompts.prefix %>.layout')).to.equal(true);
        });
      });
    });
  });
}
