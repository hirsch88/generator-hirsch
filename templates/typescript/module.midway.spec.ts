/// <reference path="../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= cameledName %>.test {
  'use strict';

  describe('Midway: <%= prefix %>.<%= cameledName %>', () => {
    var module: ng.IModule;
    before(() => module = angular.module('<%= prefix %>.<%= cameledName %>'));

    it('should be registered', () => should.exist(module));
  });
}
