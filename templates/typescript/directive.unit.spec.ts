/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${Namespace}.<%= classedName %>Directive`, () => {
    var $compile, $rootScope;

    beforeEach(module(Namespace));

    beforeEach(angular.mock.inject(
      ['$compile', '$rootScope', ($c, $r) => {
        $compile = $c;
        $rootScope = $r;
      }]
    ));<% if (hasController) { %>

    var controller: I<%= classedName %>Controller;
    beforeEach(inject($controller => controller = $controller(ID.<%= classedName %>Controller)));

    it('should contain a <%= classedName %> controller', () => should.exist(controller));<% } %>
  });
}
