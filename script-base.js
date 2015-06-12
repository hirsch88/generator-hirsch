'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var hirschUtils = require('./util.js');
var chalk = require('chalk');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  var packageJson = {};
  var projectConfig = {};

  try {
    packageJson = require(path.join(process.cwd(), 'package.json'));
  } catch (e) {}

  try {
    projectConfig = hirschUtils.getProjectConfig();
    this.projectConfig = hirschUtils.getProjectConfig();
  } catch (e) {}


  if (packageJson.name) {
    this.appname = packageJson.name;
  } else {
    this.appname = path.basename(process.cwd());
  }

  this.appname = this._.slugify(this._.humanize(this.appname));
  this.scriptAppName = packageJson.moduleName || this._.camelize(this.appname) + hirschUtils.appName(this);
  this.cameledName = this._.camelize(this.name);
  this.classedName = this._.classify(this.name);
  this.prefix = packageJson.prefix;

  this.env.options.srcPath = projectConfig.path.srcDir;
  this.env.options.appPath = path.join(projectConfig.path.srcDir, projectConfig.path.appDir);

  this.env.options.testPath = {
    dir: projectConfig.path.testDir,
    e2e: path.join(projectConfig.path.testDir, 'e2e'),
    unit: path.join(projectConfig.path.testDir, 'unit'),
    midway: path.join(projectConfig.path.testDir, 'midway')
  };

  this.env.options.typescript = (packageJson.language === 'TypeScript');

  var sourceRoot = '/templates/javascript';
  this.scriptSuffix = '.js';

  if (this.env.options.typescript) {
    sourceRoot = '/templates/typescript';
    this.scriptSuffix = '.ts';
  }

  this.sourceRoot(path.join(__dirname, sourceRoot));
};

util.inherits(Generator, yeoman.generators.NamedBase);


Generator.prototype.readModules = function (cb) {
  var done = this.async();
  hirschUtils.getModulesFromFileStructure(this, function (modules) {
    this.modules = modules;
    if (cb) {
      cb();
    }
    done();
  }.bind(this));
};

Generator.prototype.readComponents = function (module, type, cb) {
  var done = this.async();
  hirschUtils.getComponentsFromFileStructure(this, module || 'common', type, function(components) {
    this.components = components;
    if (cb) {
      cb();
    }
    done();
  }.bind(this));
};

Generator.prototype.modulePrompt = function () {
  if (!this.askForModule) {
    return;
  }

  var done = this.async();
  var prompts = [
    {
      type: 'list',
      name: 'chosenModule',
      message: 'Choose the module of your service: ',
      choices: this.modules,
      default: this.modules.indexOf('common')
    }
  ];

  this.prompt(prompts, function (props) {
    this.module = props.chosenModule || 'common';
    done();
  }.bind(this));
};

Generator.prototype.appTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join(this.env.options.appPath, dest) + this.scriptSuffix, 
    this,
    { interpolate: /<%=([\s\S]+?)%>/g }
  ]);
};

Generator.prototype.testTemplate = function (type, src, dest) {
  type = type || 'unit';
  yeoman.generators.Base.prototype.template.apply(this, [
    src + '.' + type + '.spec' + this.scriptSuffix,
    path.join(this.env.options.testPath[type], dest) + this.scriptSuffix, 
    this,
    { interpolate: /<%=([\s\S]+?)%>/g }
  ]);
};

Generator.prototype.htmlTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + '.html',
    path.join(this.env.options.appPath, dest) + '.html', 
    this,
    { interpolate: /<%=([\s\S]+?)%>/g }
  ]);
};

Generator.prototype.say = function (componentName) {
  console.log('');
  console.log(chalk.green('✔ ') + componentName + ' ' + chalk.green(this.cameledName) + ' created');
  console.log('');
};
