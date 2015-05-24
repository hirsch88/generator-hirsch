/// <reference path="../../../typings/tsd.d.ts"/>

'use strict';

describe('Unit: members', function () {

  beforeEach(module('app'));

  it('should contain an members service',
    angular.mock.inject([App.Common.Services.ID.MembersService, function (MemberService) {
      expect(MemberService).not.to.equal(null);
    }])
  );

  it('should have a working members',
    angular.mock.inject([App.Common.Services.ID.MembersService, function (ms) {
      expect(ms.get).not.to.equal(null);
      expect(ms.getFullName).not.to.equal(null);
    }])
  );

  it('should have a working service that build fullnames',
    angular.mock.inject([App.Common.Services.ID.MembersService, function (ms) {

      var fullname = ms.getFullName({
        fname: 'Horst',
        lname: 'Bubu'
      });
      expect(fullname).to.equal('Horst Bubu');
    }])
  );
});