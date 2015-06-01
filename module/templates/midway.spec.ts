/// <reference path="../../../typings/tsd.d.ts" />

describe('Midway: <%= pkg.prefix %>.<%= meta.lowercaseName %>', () => {

  var module;
  before(() => {
    module = angular.module('<%= pkg.prefix %>.<%= meta.lowercaseName %>');
  });

  it('should be registered', () => {
    should.exist(module);
  });
});
