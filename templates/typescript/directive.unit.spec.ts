namespace <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${Namespace}.<%= classedName %>Directive`, () => {
    let $compile: ng.ICompileService, $rootScope: ng.IRootScopeService;

    beforeEach(angular.mock.module(`${Namespace}.<%= classedName %>`));

    /* tslint:disable:variable-name */
    beforeEach(angular.mock.inject(_$compile_ => $compile = _$compile_));
    beforeEach(angular.mock.inject(_$rootScope_ => $rootScope = _$rootScope_));
    /* tslint:enable:variable-name */<% if (hasController) { %>

    let controller: <%= classedName %>Controller;
    beforeEach(inject(($controller: ng.IControllerService) => controller = $controller(ID.<%= classedName %>Controller)));

    it('should contain a <%= classedName %> controller', () => should.exist(controller));<% } %>
  });
}
