/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.directives.test {
  'use strict';

  describe('Unit: <%= prefix %>.<%= module %>.directives.<%= classedName %>Directive', () => {
    var $compile, $rootScope;

    beforeEach(module('<%= prefix %>.<%= module %>.directives'));

    beforeEach(angular.mock.inject(
      ['$compile', '$rootScope', ($c, $r) => {
        $compile = $c;
        $rootScope = $r;
      }]
    ));<% if (hasController) { %>

    var controller: I<%= classedName %>ViewModel;
    beforeEach(inject($controller => controller = $controller(ID.<%= classedName %>Controller)));

    it('should contain a <%= classedName %> controller', () => should.exist(controller));<% } %>
  });
}
