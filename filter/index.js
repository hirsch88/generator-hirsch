'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');
var path = require('path');

var FilterGenerator = yeoman.generators.NamedBase.extend({
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
        message: 'Please describe your filter.'
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
        type:    'list',
        name:    'chosenModule',
        message: 'Choose the location(modules) of your filter: ',
        choices: this.modules,
        default: this.modules.indexOf('common')
      }
    ];

    this.prompt(prompts, function (props) {
      this.description = props.description;
      this.dependencies = props.dependencies;
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

      this.targetScript = path.join(
        this.projectConfig.path.srcDir,
        this.projectConfig.path.appDir,
        modulePath,
        'filters',
        this.projectConfig.meta.lowercaseName + '.filter.js'
      );

      this.targetTestUnit = path.join(
        this.projectConfig.path.testDir,
        'unit',
        this.chosenModule,
        this.projectConfig.meta.lowercaseName + '.filter.spec.js'
      );

    },
    /**
     * TEMPLATE
     */
    //template: function () {
    //
    //},
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
    console.log(chalk.green('✔ ') + 'Filter ' + chalk.green(this.projectConfig.meta.capitalizedName) + ' created');
    console.log('');
  }
});
module.exports = FilterGenerator;
