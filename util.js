'use strict';
var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var glob = require('glob');
var _s = require('underscore.string');
var _ = require('lodash');

module.exports = {

  appName: function (self) {
    var counter = 0, suffix = self.options['app-suffix'];
    // Have to check this because of generator bug #386
    process.argv.forEach(function (val) {
      if (val.indexOf('--app-suffix') > -1) {
        counter++;
      }
    });
    if (counter === 0 || (typeof suffix === 'boolean' && suffix)) {
      suffix = 'App';
    }
    return suffix ? self._.classify(suffix) : '';
  },

  joinPath: function (array) {
    return array.join('/');
  },

  getPackage: function () {
    return require(path.join(process.cwd(), 'package.json'));
  },

  getProjectConfig: function () {
    return require(path.join(process.cwd(), 'project.config.js'))();
  },

  isFileStructureModuleBased: function (pkg) {
    return pkg.structure === 'Module-Based';
  },

  getModulesFromFileStructure: function (scope, done) {
    fs.readdir(scope.destinationPath(scope.env.options.appPath), function (err, files) {
      if (files) {
        var modules = [];
        for (var i = 0; i < files.length; i++) {
          if (files[i].indexOf('.') === -1) {
            if (scope.projectConfig.ignoredModules.indexOf(files[i]) === -1) {
              modules.push(files[i]);
            }
          }
        }
        done(modules);
      } else {
        done([]);
      }
    });
  },

  getComponentsFromFileStructure: function (scope, module, dirName, cb) {
    var fullDirName = scope.destinationPath(path.join(scope.env.options.appPath, module, dirName));
    fs.readdir(fullDirName, function (err, files) {
      if (files) {
        var components = _.uniq(files.filter(function(f) {
          return f.indexOf('.module') === -1;
        }).filter(function(f) {
          return !fs.statSync(path.join(fullDirName, f)).isDirectory();
        }).map(function(f) {
          return f.replace(/\.(js|ts|html|js\.map)$/, '');
        }).map(_s.classify));

        cb(components);
      } else {
        cb([]);
      }
    });
  },

  getPromtsForModuleBasedFileStructure: function (scope, prompts) {
    prompts.push(
      {
        type:    'list',
        name:    'chosenModule',
        message: 'Choose the location(modules) for your service: ',
        choices: scope.modules,
        default: scope.modules.indexOf('common')
      }
    );
  },

  //getContext: function (name, module) {
  //  var pkg = this.getPackage();
  //
  //  return {
  //    name:                  name,
  //    lowercaseName:         this.firstCharToLowerCase(name),
  //    lowercaseModuleName:   this.firstCharToLowerCase(module),
  //    capitalizedName:       this.firstCharToUpperCase(name),
  //    capitalizedModuleName: this.firstCharToUpperCase(module),
  //    appName:               pkg.name,
  //    prefix:                pkg.prefix,
  //    date:                  this.getCreationDate()
  //  };
  //},

  buildMetaInformations: function (name, module) {
    module = module || '';

    return {
      name:                  name,
      module:                this.firstCharToLowerCase(module),
      lowercaseName:         this.firstCharToLowerCase(name),
      lowercaseModuleName:   (module !== 'common') ? this.firstCharToLowerCase(module) : '',
      capitalizedName:       this.firstCharToUpperCase(name),
      capitalizedModuleName: (module !== 'common') ? this.firstCharToUpperCase(module) : ''
    };
  },

  buildModuleDependencies: function (text) {
    if (text) {
      var s = '';
      var a = text.split(',');
      for (var i = 0; i < a.length; i++) {
        s += "'" + a[i] + "'";
        if (i != a.length - 1) {
          s += ', ';
        }
      }
      return s;
    }
    return '';
  },


  firstCharToUpperCase: function (text) {
    if (text === undefined) {
      return undefined
    }
    return text.substring(0, 1).toUpperCase() + text.substring(1);
  },

  firstCharToLowerCase: function (text) {
    if (text === undefined) {
      return undefined
    }
    return text.substring(0, 1).toLowerCase() + text.substring(1);
  },

  getCreationDate: function () {
    var today = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[today.getMonth()] + ', ' + today.getFullYear();
  },

  hirschSay: function () {
    var icon = '';

    icon += chalk.bold.grey('     /|        |\\                   \n');
    icon += chalk.bold.grey('  `__\\\\        //__\'              \n');
    icon += chalk.bold.grey('      ||      ||') + '         .---------------.     \n';
    icon += chalk.bold.grey('    \\__`\\     |\'__/') + '      |     ' + chalk.blue('happy') + '     |     \n';
    icon += chalk.bold.grey('      `_\\\\   //_\ ') + '        |   ' + chalk.bold('<') + chalk.bold.red('CODING') + chalk.bold('/> ') + '  |     \n';
    icon += '      _.,:---;,._        \'---------------\'    \n';
    icon += '      \\_:     :_/                              \n';
    icon += '        |@. .@|                                 \n';
    icon += '        |     |                                 \n';
    icon += '         \\.-./            \n';
    icon += '          `-\'             \n';


    return icon;
    //    /|       |\
    // `__\\       //__'
    //    ||      ||
    //  \__`\     |'__/
    //    `_\\   //_'
    //    _.,:---;,._
    //    \_:     :_/
    //      |@. .@|
    //      |     |
    //      ,\.-./ \
    //      ;;`-'
  }


};


