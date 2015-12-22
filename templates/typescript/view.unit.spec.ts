namespace <%= prefix %>.<%= module %>.<%= $namespace %>.test {
  'use strict';

  describe(`Unit: ${Namespace}.<%= classedName %>Controller`, () => {

    beforeEach(angular.mock.module(`${Namespace}.<%= classedName %>`));

    let controller: <%= classedName %>Controller;
    beforeEach(inject(($controller: ng.IControllerService) => controller = $controller(ID.<%= classedName %>Controller)));

    it('should contain a <%= classedName %> controller', () => should.exist(controller));
  });
}
