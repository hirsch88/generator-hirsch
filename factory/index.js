'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');

var FactoryGenerator = yeoman.generators.NamedBase.extend({
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
        message: 'Please describe your factory.'
      },
      {
        type:    'string',
        name:    'modules',
        message: 'Enter your angular model modules?'
      },
      {
        type:    'string',
        name:    'dependencies',
        message: 'Enter your dependencies?'
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

    var target = this.paths.srcDir + '/' + this.paths.app.common.serviceDir + '/' + this.context.capitalizedName + '.js';
    console.log(target);
    this.fs.copyTpl(
      this.templatePath('factory'),
      this.destinationPath(target),
      this.context
    );
  },
  end:          function () {
    console.log('');
    console.log(chalk.bold('Your factory ') + chalk.bold.green(this.context.capitalizedName) + chalk.bold(' has been created successfully!'));
    console.log('');
  }
});
module.exports = FactoryGenerator;
