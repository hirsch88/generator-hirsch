'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');

var Generator = module.exports = function Generator() {
  this.askForModule = true;
  ScriptBase.apply(this, arguments);
  this.generatorName = 'factory';
  this.dirName = 'services';
};

util.inherits(Generator, ScriptBase);

Generator.prototype.init = function () {
  this.readModules();
};

Generator.prototype.prompting = function () {
  this.modulePrompt();
};

Generator.prototype.createFiles = function createFiles() {
  this.appTemplate(this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName));
  this.testTemplate('unit', this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName + '.spec'));
};

Generator.prototype.end = function createFiles() {
  this.say(this.generatorName);
};
