/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.core.util.test {
  'use strict';

  describe('Unit: AppUtil', () => {

    beforeEach(module('<%= prompts.prefix %>.core.util'));

    it('should contain an appUtil service',
      angular.mock.inject([ID.AppUtil, appUtil => should.exist(appUtil)])
    );

    it('should have a getServerUrl function',
      angular.mock.inject([ID.AppUtil, appUtil => {
        expect(appUtil.getServerUrl()).to.be.a('string');
      }])
    );
  });
}
