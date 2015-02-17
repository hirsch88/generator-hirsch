'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');

var FilterGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.pkg = helper.getPackage();
    this.paths = helper.getPaths();
  },
  prompting:    function () {
    var done = this.async();
    var prompts = [
      {
        type:    'string',
        name:    'description',
        message: 'Describe your Filter'
      },
      {
        type:    'string',
        name:    'modules',
        message: 'Enter your angular model modules'
      },
      {
        type:    'string',
        name:    'dependencies',
        message: 'Tell me your dependencies'
      }

    ];
    this.prompt(prompts, function (props) {
      this.description = props.description;
      this.dependencies = props.dependencies;
      this.modules = helper.buildModuleDependencies(props.modules);

      done();
    }.bind(this));
  },
  writing:      function () {
    this.context = helper.getContext(this.name);
    this.context.description = this.description;
    this.context.modules = this.modules;
    this.context.dependencies = this.dependencies;

    var target = this.paths.srcDir + '/' + this.paths.app.common.filterDir + '/' + this.context.capitalizedName;

    this.fs.copyTpl(
      this.templatePath('template'),
      this.destinationPath(target + 'Filter.js'),
      this.context
    );

  },
  end:          function () {
    console.log('');
    console.log(chalk.green('✔ ') + 'Filter ' + chalk.green(this.context.capitalizedName) + ' created');
    console.log('');
  }
});
module.exports = FilterGenerator;
