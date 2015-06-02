'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');
var hirschUtils = require('../util.js');

var Generator = module.exports = function Generator() {
  this.askForModule = true;
  ScriptBase.apply(this, arguments);
  this.generatorName = 'view';
  this.generatorNamePl = 'views';
};

util.inherits(Generator, ScriptBase);

Generator.prototype.init = function () {
  this.readModules();
}

Generator.prototype.prompting1 = function () {
  this.modulePrompt();
}

Generator.prototype.prompting2 = function () {
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
    var relModulePath = path.join(this.module, this.generatorNamePl, this.name + '.html').toLowerCase();
    var relAppPath = path.join(this.env.options.appPath, relModulePath).replace(/^src/, '').replace(/\\/g, '/').replace(/^\//, '');
    this.templateUrl = relAppPath;
    done();
  }.bind(this));
}

Generator.prototype.initComponents = function () {
  this.readComponents(this.module, this.generatorName);
}

Generator.prototype.createFiles = function () {
  this.appTemplate(this.generatorName, path.join(this.module, this.generatorNamePl, this.name));
  this.appTemplate(this.generatorNamePl + '.module', path.join(this.module, this.generatorNamePl, this.generatorNamePl + '.module'));
  this.htmlTemplate(this.generatorName, path.join(this.module, this.generatorNamePl, this.name));
  this.testTemplate('unit', this.generatorName, path.join(this.module, this.generatorNamePl, this.name + '.spec'));
};

Generator.prototype.end = function () {
  this.say(this.generatorName);
};
