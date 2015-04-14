'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');
var path = require('path');

var DirectiveGenerator = yeoman.generators.NamedBase.extend({
  /**
   * INITIALIZING
   * Loads the projectConfig into the scope of the generator
   */
  initializing: function () {
    var done = this.async();
    this.projectConfig = helper.getProjectConfig();
    this.projectConfig.date = helper.getCreationDate();
    this.modules = helper.getModulesFromFileStructure(this, done);
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
        message: 'What kind of restrict to you use E,C or A',
        default: 'EA'
      },
      {
        type:    'confirm',
        name:    'hasTemplate',
        message: 'Do you need a TEMPLATE file?',
        default: 'true'
      },
      {
        type:    'confirm',
        name:    'hasController',
        message: 'Do you need a CONTROLLER file?',
        default: 'true'
      },
      {
        type:    'confirm',
        name:    'hasLinkFnc',
        message: 'Do you need a LINK function file?',
        default: 'false'
      },
      {
        type:    'list',
        name:    'chosenModule',
        message: 'Choose the location(modules) of your directive: ',
        choices: this.modules,
        default: this.modules.indexOf('common')
      }
    ];

    this.prompt(prompts, function (props) {
      this.description = props.description;
      this.dependencies = props.dependencies;
      this.restrict = props.restrict;
      this.hasTemplate = props.hasTemplate;
      this.hasController = props.hasController;
      this.hasLinkFnc = props.hasLinkFnc;
      this.chosenModule = props.chosenModule || 'common';
      this.modules = props.modules;

      done();
    }.bind(this));
  },
  writing:      {
    /**
     * PROMPTS
     * Adds the answers of the user to the project config object
     */
    prompts:     function () {
      var done = this.async();
      this.projectConfig.prompts = {};
      this.projectConfig.prompts.description = this.description;
      this.projectConfig.prompts.dependencies = this.dependencies;
      this.projectConfig.prompts.restrict = this.restrict.toUpperCase();
      this.projectConfig.prompts.hasTemplate = this.hasTemplate;
      this.projectConfig.prompts.hasController = this.hasController;
      this.projectConfig.prompts.hasLinkFnc = this.hasLinkFnc;
      this.projectConfig.prompts.modules = helper.buildModuleDependencies(this.modules);
      this.projectConfig.meta = helper.buildMetaInformations(this.name, this.chosenModule);
      done();
    },
    /**
     * DESTINATION
     * Defines the destination of our new files
     */
    destination: function () {
      var modulePath = (this.chosenModule === 'common')
        ? this.chosenModule
        : this.chosenModule + '/common';

      var directivePath = path.join(
        this.projectConfig.path.srcDir,
        this.projectConfig.path.appDir,
        modulePath,
        'directives'
      );

      this.targetTemplate = path.join(
        directivePath,
        this.projectConfig.pkg.prefix +
        this.projectConfig.meta.capitalizedModuleName +
        this.projectConfig.meta.capitalizedName + '.directive.html'
      );

      this.targetScript = path.join(
        directivePath,
        this.projectConfig.pkg.prefix +
        this.projectConfig.meta.capitalizedModuleName +
        this.projectConfig.meta.capitalizedName + '.directive.js'
      );
      this.projectConfig.meta.templateUrl = this.targetTemplate.replace('src/', '');

      this.targetTestUnit = path.join(
        this.projectConfig.path.testDir,
        'unit',
        this.chosenModule,
        this.projectConfig.pkg.prefix +
        this.projectConfig.meta.capitalizedModuleName +
        this.projectConfig.meta.capitalizedName + '.directive.spec.js'
      );

    },
    /**
     * TEMPLATE
     */
    template:    function () {
      if (this.hasTemplate) {
        this.fs.copyTpl(
          this.templatePath('template'),
          this.destinationPath(this.targetTemplate),
          this.projectConfig
        );
      }
    },
    /**
     * SCRIPT
     */
    script:      function () {
      this.fs.copyTpl(
        this.templatePath('script'),
        this.destinationPath(this.targetScript),
        this.projectConfig
      );
    },
    /**
     * TEST
     */
    test:        function () {
      this.fs.copyTpl(
        this.templatePath('unit.spec'),
        this.destinationPath(this.targetTestUnit),
        this.projectConfig
      );
    }
  },
  end:          function () {
    console.log('');
    console.log(chalk.green('✔ ') + 'Directive ' + chalk.green(this.projectConfig.meta.capitalizedName) + ' created');
    console.log('');
  }
});
module.exports = DirectiveGenerator;
