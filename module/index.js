'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');
var path = require('path');

var ModuleGenerator = yeoman.generators.NamedBase.extend({
  /**
   * INITIALIZING
   * Loads the projectConfig into the scope of the generator
   */
  initializing: function () {
    this.projectConfig = helper.getProjectConfig();
    this.projectConfig.date = helper.getCreationDate();
  },
  prompting:    function () {
    var done = this.async();
    var prompts = [
      {
        type:    'string',
        name:    'description',
        message: 'Describe your Module'
      },
      {
        type:    'string',
        name:    'modules',
        message: 'Enter your angular modules dependencies'
      }

    ];
    this.prompt(prompts, function (props) {
      this.description = props.description;
      this.description = props.description;
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
      this.projectConfig.prompts.modules = helper.buildModuleDependencies(this.modules);
      this.projectConfig.meta = helper.buildMetaInformations(this.name);
      done();
    },
    /**
     * DESTINATION
     * Defines the destination of our new files
     */
    destination: function () {

      this.targetScript = path.join(
        this.projectConfig.path.srcDir,
        this.projectConfig.path.appDir,
        this.projectConfig.meta.lowercaseName,
        this.projectConfig.meta.lowercaseName + '.module.js'
      );

      this.targetTestMidway = path.join(
        this.projectConfig.path.testDir,
        'midway',
        this.projectConfig.meta.lowercaseName,
        this.projectConfig.meta.lowercaseName + '.module.spec.js'
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
        this.templatePath('midway.spec'),
        this.destinationPath(this.targetTestMidway),
        this.projectConfig
      );
    }
  },
  end:          function () {
    console.log('');
    console.log(chalk.green('✔ ') + 'Module ' + chalk.green(this.projectConfig.meta.capitalizedName) + ' created');
    console.log('');
  }
});
module.exports = ModuleGenerator;
