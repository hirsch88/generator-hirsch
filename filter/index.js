'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');

var Generator = module.exports = function Generator() {
  this.askForModule = true;
  ScriptBase.apply(this, arguments);
  this.generatorName = 'filter';
  this.dirName = 'filters';
  this.$namespace = this.dirName;
};

util.inherits(Generator, ScriptBase);

Generator.prototype.init = function () {
  this.classedName = this.classedName + 'Filter';
  this.readModules();
};

Generator.prototype.modulePrompting = function () {
  this.modulePrompt();
};

Generator.prototype.folderPrompting = function () {
  this.folderPrompt(this.dirName);
};

Generator.prototype.initComponents = function () {
  this.readComponents(this.module, this.dirName);
};

Generator.prototype.createFiles = function createFiles() {
  this.appTemplate(this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName));
  if (this.env.options.typescript) {
    this.appTemplate(this.generatorName + 's.module', path.join(this.module, this.dirName, path.basename(this.dirName) + '.module'));
  }else{
    this.appTemplate('sub.module', path.join(this.module, this.dirName, path.basename(this.dirName) + '.module'));
  }
  this.testTemplate('unit', this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName));
};

Generator.prototype.end = function () {
  this.say(this.generatorName);
};
