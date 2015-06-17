app.core.constants.Global = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
    .constant('lodash', _)
    .constant('moment', moment);

  return module;

})(app.core.constants.add('Global'));
