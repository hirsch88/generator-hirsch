/// <reference path="../../../typings/tsd.d.ts"/>
'use strict';
describe('Unit: AppUtil', function () {
    beforeEach(module('<%= prompts.prefix %>'));
    it('should contain an appUtil service', angular.mock.inject([, prompts.prefix %  > .core.util.ID.AppUtil, function (appUtil) {
            should.exist(appUtil);
        }]));
    it('should have a getServerUrl function', angular.mock.inject([, prompts.prefix %  > .core.util.ID.AppUtil, function (appUtil) {
            expect(appUtil.getServerUrl()).to.be.a('string');
        }]));
});
