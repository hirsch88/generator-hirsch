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

  var controller;
  beforeEach(inject($controller => controller = $controller(<%= prefix %>.<%= module %>.directives.ID.<%= classedName %>Controller)));

  it('should contain a <%= classedName %> controller', () => {
    should.exist(controller);
  });<% } %>
});
