'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');
var hirschUtils = require('../util.js');

var Generator = module.exports = function Generator() {
  this.askForModule = true;
  ScriptBase.apply(this, arguments);
  this.generatorName = 'service';
  this.generatorNamePl = 'services';
};

util.inherits(Generator, ScriptBase);

Generator.prototype.init = function () {
  this.readModules();
}

Generator.prototype.prompting = function () {
  this.modulePrompt();
}

Generator.prototype.initComponents = function () {
  this.readComponents(this.module, this.generatorName);
}

Generator.prototype.promptForServiceType = function () {
  var done = this.async();
  var prompts = [
    {
      type: 'list',
      name: 'serviceType',
      message: 'Should the service be generated as a SERVICE or a FACTORY?',
      choices: ['service', 'factory'],
      default: 0
    }
  ];

  this.prompt(prompts, function (props) {
    this.useFactory = props.serviceType === 'factory';
    done();
  }.bind(this));
}

Generator.prototype.createFiles = function () {
  this.appTemplate(this.generatorName, path.join(this.module, this.generatorNamePl, this.name + '.' + this.generatorName));
  this.appTemplate(this.generatorNamePl + '.module', path.join(this.module, this.generatorNamePl, this.generatorNamePl + '.module'));
  this.testTemplate('unit', this.generatorName, path.join(this.module, this.generatorNamePl, this.name + '.' + this.generatorName + '.spec'));
};

Generator.prototype.end = function () {
  this.say(this.generatorName);
};
