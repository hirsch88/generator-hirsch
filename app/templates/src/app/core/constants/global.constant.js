(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.constants.Global', [])
    .constant('$lodash', _)
    .constant('$moment', moment)
    .constant('$bluebird', Promise);

})();
