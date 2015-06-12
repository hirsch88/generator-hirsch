/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.services.test {
  'use strict';

  describe(`Unit: ${Namespace}.<%= classedName %>Service`, () => {

    beforeEach(module(Namespace));
    
    var service: I<%= classedName %>Service;
    beforeEach(angular.mock.inject([ID.<%= classedName %>Service, s => service = s]));

    it('should contain a <%= classedName %> service', () => should.exist(service));
    
    it('should have a method', () => should.exist(service.method));
  });
}
