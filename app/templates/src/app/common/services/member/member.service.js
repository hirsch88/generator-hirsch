/// <reference path="../../../../../typings/tsd.d.ts"/>
var common;
(function (common) {
    var services;
    (function (services) {
        var member;
        (function (member_1) {
            'use strict';
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
             * This is a data-service.
             */
            var MembersService = (function () {
                /*@ngInject*/
                function MembersService($http, $q) {
                    var _this = this;
                    this.$http = $http;
                    this.$q = $q;
                    /**
                     * this is a method which does stuff
                     */
                    this.get = function () {
                        var deferred = _this.$q.defer();
                        deferred.resolve(data);
                        return deferred.promise;
                    };
                    this.getFullName = function (member) {
                        if (member) {
                            return member.fname + ' ' + member.lname;
                        }
                        return '';
                    };
                }
                MembersService.ID = 'members';
                return MembersService;
            })();
            member_1.MembersService = MembersService;
            angular
                .module('common.services.member', [])
                .service(MembersService.ID, MembersService);
        })(member = services.member || (services.member = {}));
    })(services = common.services || (common.services = {}));
})(common || (common = {}));
