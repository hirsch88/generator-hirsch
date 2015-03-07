'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');

var ViewGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    var done = this.async();
    this.pkg = helper.getPackage();
    this.paths = helper.getPaths();

    this.isModuleBased = helper.isFileStructureModuleBased(this.pkg);
    this.modules = helper.getModulesFromFileStructure(this, function () {
      done();
    });

  },
  prompting:    function () {
    var done = this.async();
    var prompts = [
      {
        type:    'string',
        name:    'description',
        message: 'Please describe your view.'
      },
      {
        type:    'string',
        name:    'modules',
        message: 'Enter your angular dependencies modules?'
      },
      {
        type:    'string',
        name:    'dependencies',
        message: 'Enter your dependencies injects?'
      }
    ];

    helper.getPromtsForModuleBasedFileStructure(this, prompts);

    this.prompt(prompts, function (props) {
      this.description = props.description;
      this.dependencies = props.dependencies;
      this.chosenModule = props.chosenModule || 'common';
      this.modules = helper.buildModuleDependencies(props.modules);

      done();
    }.bind(this));

  },
  writing:      function () {
    this.context = helper.getContext(this.name);
    this.context.description = this.description;
    this.context.modules = this.modules;
    this.context.dependencies = this.dependencies;
    this.context.url = this.context.name.toLowerCase();

    var a = this.context.name.split('/');
    if (a.length > 1) {
      var p = '', m = '', c = '';
      for (var i = 0; i < a.length; i++) {
        p += helper.firstCharToLowerCase(a[i]);
        m += helper.firstCharToLowerCase(a[i]);
        c += helper.firstCharToUpperCase(a[i]);

        if (i < a.length - 1) {
          p += '/';
          m += '.';
        }

      }
      this.context.capitalizedName = c;
      this.context.lowercaseName = helper.firstCharToLowerCase(c);
      this.context.path = p;
      this.context.fileName = helper.firstCharToUpperCase(a[a.length - 1]);
      this.context.module = m;

    } else {
      this.context.path = this.context.module = this.context.lowercaseName;
      this.context.fileName = this.context.capitalizedName;

    }

    // Target
    var target = this.paths.srcDir + '/' + this.paths.appDir + '/' + this.chosenModule;
    target += '/views/' + this.context.lowercaseName;
    this.context.templateUrl = target + '.html';
    this.context.templateUrl = this.context.templateUrl.replace('src/', '');

    // Module name
    this.context.moduleName = helper.firstCharToUpperCase(this.chosenModule);
    this.context.modulePath = this.chosenModule;
    if (this.chosenModule === 'common') {
      this.context.modulePath += '.views';
    }

    this.fs.copyTpl(
      this.templatePath('template'),
      this.destinationPath(target + '.js'),
      this.context
    );

    this.fs.copy(
      this.templatePath('template.html'),
      this.destinationPath(target + '.html')
    );

  },
  end:          function () {
    console.log('');
    console.log(chalk.green('✔ ') + 'View ' + chalk.green(this.context.capitalizedName) + ' created');
    console.log('');
  }
});
module.exports = ViewGenerator;

