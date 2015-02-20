/**
 * Member
 * @namespace services
 */
(function () {
  'use strict';

  angular
    .module('common.service.member', [])
    .factory('MemberService', MemberService);

  var data = [
    {
      fname: 'John',
      lname: 'Smith'
    },
    {
      fname: 'Susan',
      lname: 'Schrader'
    },
    {
      fname: 'Walter',
      lname: 'Frei'
    },
    {
      fname: 'Jason',
      lname: 'Miller'
    }
  ];

  /**
   * @memberOf services
   * @name MemberService
   * @alias myMember
   *
   * @description
   * This data-service is called "myMember".
   *
   * @param $http
   * @param $q
   * @returns {Object}
   * @constructor
   */
  function MemberService($http, $q) {
    var service = {
      key: 'value',

      get:         get,
      getFullName: getFullName
    };

    return service;
    ////////////////////////

    /**
     * @memberOf services.MemberService
     * @method get
     *
     * @description
     * this is a method who does stuff
     *
     * @example
     * var members = myMember.get();
     *
     * -- or --
     *
     * myMember.get()
     *    .then(function(result){
     *      members = result
     *    });
     *
     * @returns {Object|Promise}
     */
    function get() {
      var deferred = $q.defer();
      deferred.resolve(data);
      return deferred.promise;
    }

    /**
     * @memberOf services.MemberService
     * @method getFullName
     *
     * @param member {Object} - Should have the properties fname and lname
     * @returns {String} - Fullname
     */
    function getFullName(member) {
      if (member) {
        return member.fname + ' ' + member.lname;
      }
      return '';
    }

  }


}());
