/// <reference path="../../../typings/tsd.d.ts"/>

'use strict';

describe('Unit: MembersService', () => {

  beforeEach(module('app'));

  it('should contain an members service',
    angular.mock.inject([App.Common.Services.MembersService.ID, ms => {
      should.exist(ms);
    }])
  );

  it('should have working members',
    angular.mock.inject([App.Common.Services.MembersService.ID, ms => {
      should.exist(ms.get);
      should.exist(ms.getFullName);
    }])
  );

  it('should have a working service that build fullnames',
    angular.mock.inject([App.Common.Services.MembersService.ID, ms => {
      var fullname = ms.getFullName({
        fname: 'Horst',
        lname: 'Bubu'
      });

      expect(fullname).to.equal('Horst Bubu');
    }])
  );
});