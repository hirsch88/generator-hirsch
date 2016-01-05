namespace <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${NAMESPACE}.<%= classedName %>Controller`, () => {

    beforeEach(angular.mock.module(`${NAMESPACE}.<%= classedName %>`));

    let controller: <%= classedName %>Controller;
    beforeEach(inject(($controller: ng.IControllerService) => controller = $controller<<%= classedName %>Controller>(ID.<%= classedName %>Controller)));

    it('should contain a <%= classedName %> controller', () => should.exist(controller));
  });
}
