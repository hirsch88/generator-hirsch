'use strict';

describe('Unit: MemberService', function () {

  beforeEach(module('app'));

  it('should contain an MemberService service',
    inject(function (MemberService) {
      expect(MemberService).not.to.equal(null);
    })
  );

  it('should have a working MemberService',
    inject(['MemberService',function(ms) {

      expect(ms.get).not.to.equal(null);
      expect(ms.getFullName).not.to.equal(null);
    }])
  );

  it('should have a working service that build fullnames',
    inject(['MemberService',function(ms) {

      var fullname = ms.getFullName({
        fname: 'Horst',
        lname: 'Bubu'
      });
      expect(fullname).to.equal('Horst Bubu');
    }]));



});
