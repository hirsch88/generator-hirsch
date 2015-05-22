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
        name:    'appName',
        message: 'How would u like to call your app?',
        default: path.basename(process.cwd())
      },
      {
        name:    'prefix',
        message: 'Angular app prefix sign like ng(2chars):',
        default: 'my'
      },
      {
        name:    'description',
        message: 'Describe your application:'
      },
      {
        name:    'author',
        message: 'Who is the author?',
        default: 'Gery Hirschfeld <gery.hirschfeld@w3tec.ch>'
      },
      {
        type: 'confirm',
        name: 'useTypescript',
        message: 'Do you want to use TypeScript?',
        default: 'Y'
      },
      {
        when: function (props) {
          return props.useTypescript;
        },
        name: 'typingsPath',
        message: 'Where do you want to store the type definitions (path relative to root)?',
        default: 'typings'
      }
    ];

    this.prompt(prompts, function (props) {
      var oldDate;

      this.appName = props.appName;
      this.prefix = props.prefix;
      this.description = props.description;
      this.author = props.author;
      this.useTypescript = props.useTypescript;
      this.typingsPath = props.typingsPath;
      if (this.appName !== path.basename(process.cwd())) {
        this.destinationRoot(this.appName)
      }

      if(this.useTypescript) {
        oldDate = this.projectConfig.date;
        this.projectConfig = require('./templates/project.config.typescript')(true);
        this.projectConfig.date = oldDate;
      }

      done();
    }.bind(this));
  },
  /**
   * WRITING
   * Generates, copies the marvelous application
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
      this.projectConfig.prompts.useTypescript = this.useTypescript;
      this.projectConfig.prompts.typingsPath = this.typingsPath;
      done();
    },
    /**
     * DEV TOOLS
     * Creates the dev config files for some tools
     */
    devTools: function () {

      this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
      this.fs.copyTpl(this.templatePath('gitignore'), this.destinationPath('.gitignore'), this.projectConfig);
      this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));

      var projectConfigTemplatePath = this.projectConfig.prompts.useTypescript ?
                                        'project.config.typescript.js' :
                                        'project.config.js';

      this.fs.copy(this.templatePath(projectConfigTemplatePath), this.destinationPath('project.config.js'));


      this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.projectConfig);
      this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), this.projectConfig);
      this.fs.copyTpl(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'), this.projectConfig);

      this.fs.copyTpl(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'), this.projectConfig);

      if(this.projectConfig.prompts.useTypescript) {
        this.fs.copyTpl(this.templatePath('_tsd.json'), this.destinationPath('tsd.json'), this.projectConfig);
        this.fs.copy(this.templatePath('_tsconfig.json'), this.destinationPath('tsconfig.json'));
      }
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
    if (this.useTypescript) {
      this.env.runLoop.add('install', function (done) {
        this.emit('tsdReinstall');

        this.log('Running ' + chalk.yellow.bold('tsd reinstall --save') + '. If this fails run the commands ' +
          'yourself. TSD must be installed via `npm install -g tsd`.');

        this.spawnCommand('tsd', ['reinstall', '--save'])
          .on('exit', function (err) {
            if (err === 127) {
              this.log.error('Could not find tsd. Please install with `npm install -g tsd`.');
            }
            this.emit('tsdReinstall:end');
            done();
          }.bind(this));
      }.bind(this), { once: 'tsd reinstall', run: false });
    }
  },
  end:          function () {
    this.log('');
    this.log(helper.hirschSay());
    this.log('Go to your project folder and run ' + chalk.bold.yellow('gulp serve'));
    this.log('Then visit your app on ' + chalk.bold.yellow('http://localhost:3000'));
    this.log('');
  }
});
