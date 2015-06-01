/// <reference path="../../../typings/tsd.d.ts" />

describe('Midway: <%= prefix %>.<%= cameledName %>', () => {

  var module;
  before(() => module = angular.module('<%= prefix %>.<%= cameledName %>'));

  it('should be registered', () => {
    should.exist(module);
  });
});
