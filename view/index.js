'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');

var Generator = module.exports = function Generator() {
  this.askForModule = true;
  ScriptBase.apply(this, arguments);
  this.generatorName = 'view';
  this.dirName = 'views';
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
      name: 'url',
      message: 'Which URL should the view respond to?',
      default: this.name
    }
  ];

  this.prompt(prompts, function (props) {
    this.url = props.url;
    var relModulePath = path.join(this.module, this.dirName, this.name + '.html').toLowerCase();
    var relAppPath = path.join(this.env.options.appPath, relModulePath).replace(/^src/, '').replace(/\\/g, '/').replace(/^\//, '');
    this.templateUrl = relAppPath;
    done();
  }.bind(this));
};

Generator.prototype.initComponents = function () {
  this.readComponents(this.module, this.dirName);
};

Generator.prototype.createFiles = function createFiles() {
  this.appTemplate(this.generatorName, path.join(this.module, this.dirName, this.name));
  if (this.env.options.typescript) {
    this.appTemplate(this.dirName + '.module', path.join(this.module, this.dirName, this.dirName + '.module'));
  }else{
    this.appTemplate('sub.module', path.join(this.module, this.dirName, this.dirName + '.module'));
  }
  this.htmlTemplate(this.generatorName, path.join(this.module, this.dirName, this.name));
  this.testTemplate('unit', this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName));
};

Generator.prototype.end = function () {
  this.say(this.generatorName);
};
