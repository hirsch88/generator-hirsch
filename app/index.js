'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  /**
   * INITIALIZING
   * Loads the projectConfig into the scope of the generator
   */
  initializing: function () {
    this.projectConfig = require('./templates/project.config')(true);
    this.projectConfig.date = helper.getCreationDate();
  },
  /**
   * PROMPTING
   * Asking some questions
   */
  prompting:    function () {
    var done = this.async();
    this.log(yosay('Welcome to the marvelous ' + chalk.red('Hirsch') + ' generator!'));
    var prompts = [
      {
        type:    'string',
        name:    'appName',
        message: 'How would u like to call your app?',
        default: path.basename(process.cwd())
      },
      {
        type:    'string',
        name:    'prefix',
        message: 'Angular app prefix sign like ng(2chars):',
        default: 'my'
      },
      {
        type:    'string',
        name:    'description',
        message: 'Describe your application:'
      },
      {
        type:    'string',
        name:    'author',
        message: 'How is the author?',
        default: 'Gery Hirschfeld <gery.hirschfeld@w3tec.ch>'
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.prefix = props.prefix;
      this.description = props.description;
      this.author = props.author;
      if (this.appName !== path.basename(process.cwd())) {
        this.destinationRoot(this.appName)
      }

      done();
    }.bind(this));
  },
  /**
   * WRITING
   * Generates, copys the marvelous application
   */
  writing:      {
    /**
     * PROMPTS
     * Adds the answers of the user to the project config object
     */
    prompts: function () {
      var done = this.async();
      this.projectConfig.prompts = {};
      this.projectConfig.prompts.appName = this.appName;
      this.projectConfig.prompts.prefix = this.prefix;
      this.projectConfig.prompts.description = this.description;
      this.projectConfig.prompts.author = this.author;
      done();
    },
    /**
     * DEV TOOLS
     * Creates the dev config files for some tools
     */
    devTools: function () {

      this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
      this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
      this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
      this.fs.copy(this.templatePath('project.config.js'), this.destinationPath('project.config.js'));


      this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.projectConfig);
      this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), this.projectConfig);
      this.fs.copyTpl(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'), this.projectConfig);

      this.fs.copy(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'));
    },
    /**
     * BOILERPLATE APPLICATION
     * Creates the basic of the app and some examples
     */
    app:      function () {

      // Assets
      this.directory(
        this.templatePath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.assetsDir)),
        this.destinationPath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.assetsDir))
      );

      // Index
      this.fs.copyTpl(
        this.templatePath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.main)),
        this.destinationPath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.main)), this.projectConfig
      );

      // App.js
      this.fs.copyTpl(
        this.templatePath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.app.main)),
        this.destinationPath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.app.main)), this.projectConfig
      );

      // Core files
      var corePath = path.join(this.projectConfig.path.srcDir, this.projectConfig.path.app.coreDir);
      this.fs.copy(this.templatePath(path.join(corePath, 'app.config.js')), this.destinationPath(path.join(corePath, 'app.config.js')));
      this.fs.copy(this.templatePath(path.join(corePath, 'app.core.js')), this.destinationPath(path.join(corePath, 'app.core.js')));
      this.fs.copy(this.templatePath(path.join(corePath, 'app.logger.js')), this.destinationPath(path.join(corePath, 'app.logger.js')));
      this.fs.copy(this.templatePath(path.join(corePath, 'app.router.js')), this.destinationPath(path.join(corePath, 'app.router.js')));
      this.fs.copy(this.templatePath(path.join(corePath, 'app.run.js')), this.destinationPath(path.join(corePath, 'app.run.js')));
      this.fs.copy(this.templatePath(path.join(corePath, 'app.events.js')), this.destinationPath(path.join(corePath, 'app.events.js')));
      this.fs.copyTpl(
        this.templatePath(path.join(corePath, 'app.util.js')),
        this.destinationPath(path.join(corePath, 'app.util.js')), this.projectConfig
      );

      // Layout module
      var layoutPath = path.join(this.projectConfig.path.srcDir, this.projectConfig.path.app.layoutDir);
      this.fs.copy(this.templatePath(path.join(layoutPath, 'layout.module.js')), this.destinationPath(path.join(layoutPath, 'layout.module.js')));

      this.fs.copyTpl(
        this.templatePath(path.join(layoutPath, 'views', 'admin.html')),
        this.destinationPath(path.join(layoutPath, 'views', 'admin.html')), this.projectConfig
      );
      this.fs.copy(this.templatePath(path.join(layoutPath, 'views', 'admin.js')), this.destinationPath(path.join(layoutPath, 'views', 'admin.js')));

      this.fs.copy(this.templatePath(path.join(layoutPath, 'views', 'public.html')), this.destinationPath(path.join(layoutPath, 'views', 'public.html')));
      this.fs.copy(this.templatePath(path.join(layoutPath, 'views', 'public.js')), this.destinationPath(path.join(layoutPath, 'views', 'public.js')));


      this.fs.copy(
        this.templatePath(path.join(layoutPath, 'directives', 'header.directive.html')),
        this.destinationPath(path.join(layoutPath, 'directives', 'header.directive.html'))
      );
      this.fs.copyTpl(
        this.templatePath(path.join(layoutPath, 'directives', 'header.directive.js')),
        this.destinationPath(path.join(layoutPath, 'directives', 'header.directive.js')), this.projectConfig
      );

      // Common module
      this.directory(
        this.templatePath(path.join(
          this.projectConfig.path.srcDir,
          this.projectConfig.path.app.commonDir
        )),
        this.destinationPath(path.join(
          this.projectConfig.path.srcDir,
          this.projectConfig.path.app.commonDir
        ))
      );

      // Home module
      this.directory(
        this.templatePath(path.join(
          this.projectConfig.path.srcDir,
          this.projectConfig.path.appDir,
          'home'
        )),
        this.destinationPath(path.join(
          this.projectConfig.path.srcDir,
          this.projectConfig.path.appDir,
          'home'
        ))
      );


    },
    /**
     * TEST FILES
     * Includes some test files and as well the configs
     */
    test:     function () {
      this.directory(
        this.templatePath(this.projectConfig.path.testDir),
        this.destinationPath(this.projectConfig.path.testDir)
      );

      this.fs.copy(this.templatePath('karma-shared.config.js'), this.destinationPath('karma-shared.config.js'));
      this.fs.copy(this.templatePath('karma-unit.config.js'), this.destinationPath('karma-unit.config.js'));
      this.fs.copy(this.templatePath('karma-midway.config.js'), this.destinationPath('karma-midway.config.js'));

    }
  },
  install:      function () {
    this.installDependencies();
  },
  end:          function () {
    this.log('');
    this.log(helper.hirschSay());
    this.log('Go to your project folder and run ' + chalk.bold.yellow('gulp serve'));
    this.log('Than visit your app on ' + chalk.bold.yellow('http://localhost:3000'));
    this.log('');
  }
});
