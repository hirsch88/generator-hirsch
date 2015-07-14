'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');

var Generator = module.exports = function Generator() {
  this.askForModule = true;
  ScriptBase.apply(this, arguments);
  this.generatorName = 'filter';
  this.dirName = 'filters';
};

util.inherits(Generator, ScriptBase);

Generator.prototype.init = function () {
  this.classedName = this.classedName + 'Filter';
  this.readModules();
};

Generator.prototype.prompting = function () {
  this.modulePrompt();
};

Generator.prototype.initComponents = function () {
  this.readComponents(this.module, this.dirName);
};

Generator.prototype.createFiles = function createFiles() {
  this.appTemplate(this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName));
  if (this.env.options.typescript) {
    this.appTemplate(this.dirName + '.module', path.join(this.module, this.dirName, this.dirName + '.module'));
  }else{
    this.appTemplate('sub.module', path.join(this.module, this.dirName, this.dirName + '.module'));
  }
  this.testTemplate('unit', this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName));
};

Generator.prototype.end = function () {
  this.say(this.generatorName);
};
