var util = (function () {
  'use strict';

  var util = {
    joinPath:   joinPath,
    joinModule: joinModule,
    includes:   includes,
    isSet:      isSet
  };

  ////////////////////////////////////////////

  function isSet(value) {
    return value !== undefined && value !== null && value !== '';
  }

  function includes(string, search) {
    return string.indexOf(search) > -1;
  }

  function joinModule() {
    function f(p) {
      if (!_.isString(p)) {
        throw new TypeError('Arguments to path.join must be strings');
      }
      return p;
    }

    var paths = Array.prototype.filter.call(arguments, f);
    var joined = paths.join('.');
    if (!/^[.\/]{2}[^.\/]/.test(paths[0])) {
      joined = joined.replace(/^[.\/]{2,}/, '.');
    }
    return joined;
  }

  function joinPath() {
    function f(p) {
      if (!_.isString(p)) {
        throw new TypeError('Arguments to path.join must be strings');
      }
      return p;
    }

    var paths = Array.prototype.filter.call(arguments, f);
    var joined = paths.join('//');
    if (!/^[//\/]{2}[^//\/]/.test(paths[0])) {
      joined = joined.replace(/^[//\/]{2,}/, '//');
    }
    return joined;
  }

  return util;

}());


var Module = function Module(ID) {
  this.ID = ID;
};

Module.prototype.path = function (path) {
  return this.ID + '.' + path;
};

Module.prototype.add = function (moduleName) {
  return new Module(this.ID + '.' + moduleName);
};

Module.prototype.templateUrl = function (templateName) {
  var paths = this.ID.split('.');
  var isDirective = util.includes(this.ID, 'directives');
  paths[0] = 'app';
  paths[paths.length - 1] = templateName || (paths[paths.length - 1]);
  if (templateName === undefined && isDirective) {
    paths[paths.length - 1] += '.directive';
  }
  paths[paths.length - 1] += '.html';
  return (paths.join('/')).toLowerCase();
};
