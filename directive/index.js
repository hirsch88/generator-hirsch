'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');

var DirectiveGenerator = yeoman.generators.NamedBase.extend({
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
        message: 'Describe your Directive'
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
      },
      {
        type:    'string',
        name:    'restrict',
        message: 'What kind of restrict to you use',
        default: 'EA'
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
    this.context.restrict = this.restrict.toUpperCase();

    var target = this.paths.srcDir + '/' + this.paths.app.common.directiveDir + '/' + this.context.capitalizedName;

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
