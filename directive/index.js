'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');

var Generator = module.exports = function Generator() {
  this.askForModule = true;
  ScriptBase.apply(this, arguments);
  this.generatorName = 'directive';
  this.dirName = 'directives';
};

util.inherits(Generator, ScriptBase);

Generator.prototype.init = function () {
  this.readModules();
};

Generator.prototype.prompting = function () {
  this.modulePrompt();
};

Generator.prototype.options = function () {
  var done = this.async();
  var prompts = [
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
    }
  ];

  this.prompt(prompts, function (props) {
    this.restrict = props.restrict || 'EA';
    this.hasTemplate = props.hasTemplate;
    this.hasController = props.hasController;
    this.hasLinkFnc = props.hasLinkFnc;
    var relModulePath = path.join(this.module, this.dirName, this.name + '.' + this.generatorName + '.html').toLowerCase();
    var relAppPath = path.join(this.env.options.appPath, relModulePath).replace(/^src/, '').replace(/\\/g, '/').replace(/^\//, '');
    this.templateUrl = relAppPath;

    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  this.appTemplate(this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName));
  if(this.hasTemplate){
    this.htmlTemplate(this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName));
  }
  this.testTemplate('unit', this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName + '.spec'));
};

Generator.prototype.end = function createFiles() {
  this.say(this.generatorName);
};
