/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${Namespace}.<%= classedName %>`, () => {

    beforeEach(module(Namespace));
    
    var service: I<%= classedName %>;
    beforeEach(angular.mock.inject([ID.<%= classedName %>, s => service = s]));

    it('should contain a <%= classedName %> service', () => should.exist(service));
    
    it('should have a method', () => should.exist(service.method));
  });
}
