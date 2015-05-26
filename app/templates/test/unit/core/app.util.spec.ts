/// <reference path="../../../typings/tsd.d.ts"/>

'use strict';

describe('Unit: AppUtil', () => {

  beforeEach(module('app'));

  it('should contain an appUtil service',
    angular.mock.inject([App.Util.AppUtil.ID, appUtil => {
      should.exist(appUtil);
    }])
    );

  it('should have a getServerUrl function',
    angular.mock.inject([App.Util.AppUtil.ID, appUtil => {
      expect(appUtil.getServerUrl()).to.be.a('string');
    }])
    );
});