'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
  this.generatorName = 'module';
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createFiles = function createFiles() {
  this.appTemplate(this.generatorName, path.join(this.name, this.name + '.' + this.generatorName));
  this.testTemplate('midway', this.generatorName, path.join(this.name, this.name + '.' + this.generatorName + '.spec'));
};

Generator.prototype.end = function createFiles() {
  this.say(this.generatorName);
};
