'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');

var ServiceGenerator = yeoman.generators.NamedBase.extend({
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
        message: 'Please describe your service.'
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

    // Target
    var appTarget = this.paths.srcDir + '/' + this.paths.appDir + '/' + this.chosenModule;
    if (this.chosenModule !== 'common') {
      appTarget += '/common';
    }
    appTarget += '/services/' + this.context.lowercaseName + '.service.js';

    // Module name
    this.context.moduleName = (this.chosenModule !== 'common') ? this.chosenModule : '';
    this.context.capitalizedName = (this.chosenModule !== 'common') ? this.context.capitalizedName : this.context.lowercaseName;
    this.context.modulePath = this.chosenModule;
    if (this.chosenModule !== 'common') {
      this.context.modulePath += '.common';
    }
    this.context.modulePath += '.services';

    this.fs.copyTpl(
      this.templatePath('template'),
      this.destinationPath(appTarget),
      this.context
    );


    // Target
    var testTarget = this.paths.testDir + '/unit/' + this.chosenModule;
    if (this.chosenModule !== 'common') {
      testTarget += '/common';
    }
    testTarget += '/services/' + this.context.lowercaseName + '.service.spec.js';

    this.fs.copyTpl(
      this.templatePath('unit.spec'),
      this.destinationPath(testTarget),
      this.context
    );


  },
  end:          function () {
    console.log('');
    console.log(chalk.green('✔ ') + 'Service ' + chalk.green(this.context.capitalizedName) + ' created');
    console.log('');
  }
});
module.exports = ServiceGenerator;
