'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');

var DirectiveGenerator = yeoman.generators.NamedBase.extend({
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
        message: 'Please describe your directive.'
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
      },
      {
        type:    'string',
        name:    'restrict',
        message: 'What kind of restrict to you use',
        default: 'EA'
      }
    ];

    helper.getPromtsForModuleBasedFileStructure(this, prompts);

    this.prompt(prompts, function (props) {
      this.description = props.description;
      this.dependencies = props.dependencies;
      this.restrict = props.restrict;
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
    this.context.restrict = this.restrict.toUpperCase();

    // Target
    var target = this.paths.srcDir + '/' + this.paths.appDir + '/' + this.chosenModule;
    if (this.chosenModule !== 'common') {
      target += '/common';
    }
    target += '/directives/' + this.context.capitalizedName;

    this.context.templateUrl = target + 'Directive.html';

    // Module name
    this.context.lowerModuleName = helper.firstCharToLowerCase(this.chosenModule);
    this.context.moduleName = helper.firstCharToUpperCase(this.chosenModule);
    this.context.modulePath = this.chosenModule;
    if (this.chosenModule !== 'common') {
      this.context.modulePath += '.common';
    }
    this.context.modulePath += '.directives';

    this.fs.copyTpl(
      this.templatePath('template'),
      this.destinationPath(target + 'Directive.js'),
      this.context
    );

    this.fs.copy(
      this.templatePath('template.html'),
      this.destinationPath(target + 'Directive.html')
    );

  },
  end:          function () {
    console.log('');
    console.log(chalk.green('✔ ') + 'Directive ' + chalk.green(this.context.capitalizedName) + ' created');
    console.log('');
  }
});
module.exports = DirectiveGenerator;
