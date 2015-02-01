'use strict';

var yeoman = require( 'yeoman-generator' );
var chalk = require( 'chalk' );
var yosay = require( 'yosay' );
var util = require( 'util' );
var path = require( 'path' );

module.exports = yeoman.generators.Base.extend( {
    initializing: function() {
        this.pkg = require( '../package.json' );
    },
    prompting: function() {
        var done = this.async();
        this.log( yosay( 'Welcome to the marvelous ' + chalk.red( 'WtAngular' ) + ' generator!' ) );
        var prompts = [
            {
                type: 'string',
                name: 'appTitle',
                message: 'How would u like to call your app?',
                default: path.basename( process.cwd() )
            },
            {
                type: 'string',
                name: 'appName',
                message: 'Angualar app name: ',
                default: path.basename( process.cwd() )
            },
            {
                type: 'string',
                name: 'appSign',
                message: 'Angualar app prefix sign like ng(2chars): ',
                default: 'wt'
            },
            {
                type: 'string',
                name: 'author',
                message: 'How is the author?',
                default: 'Gery Hirschfeld <gery.hirschfeld@w3tec.ch>'
        }
        ];
        this.prompt( prompts, function( props ) {
            this.appTitle = props.appTitle;
            this.appName = props.appName;
            this.appSign = props.appSign;
            this.author = props.author;
            if ( this.appName !== path.basename( process.cwd() ) ) {
                this.destinationRoot( this.appName )
            }
            done();
        }.bind( this ) );
    },
    writing: {
        app: function() {

            /**
             * Build projext infos
             */
            function getCreationDate() {
                var today = new Date();
                var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
                    "November", "December" ];
                return monthNames[ today.getMonth() ] + ', ' + today.getFullYear();
            }
            var context = {
                appTitle: this.appTitle,
                appName: this.appName,
                appSign: this.appSign,
                author: this.author,
                date: getCreationDate()
            };

            /**
             * Build folder structure
             */
            this.mkdir( 'test' );
            this.mkdir( 'app' );
            this.mkdir( 'app/assets' );
            this.mkdir( 'app/assets/medias' );
            this.mkdir( 'app/assets/css' );
            this.mkdir( 'app/assets/i18n' );
            this.mkdir( 'app/assets/fonts' );
            this.fs.copy( this.templatePath( 'gitkeep' ), this.destinationPath( 'app/assets/fonts/.gitkeep' ) );
            this.mkdir( 'app/src/common' );
            this.mkdir( 'app/src/common/services' );
            this.fs.copy( this.templatePath( 'gitkeep' ), this.destinationPath( 'app/src/common/services/.gitkeep' ) );
            this.mkdir( 'app/src/common/directives' );
            this.fs.copy( this.templatePath( 'gitkeep' ), this.destinationPath( 'app/src/common/directives/.gitkeep' ) );
            this.mkdir( 'app/src/common/templates' );
            this.fs.copy( this.templatePath( 'gitkeep' ), this.destinationPath( 'app/src/common/templates/.gitkeep' ) );
            this.mkdir( 'app/src/w3tec' );
            this.fs.copy( this.templatePath( 'gitkeep' ), this.destinationPath( 'app/src/w3tec/.gitkeep' ) );

            this.directory(
                this.templatePath('less'),
                this.destinationPath('app/assets/less')
            );

            this.directory(
                this.templatePath('build'),
                this.destinationPath('build')
            );

            this.directory(
                this.templatePath('test'),
                this.destinationPath('test')
            );

            /**
             * Templates
             */
            this.fs.copyTpl( this.templatePath( '_package.json' ), this.destinationPath( 'package.json' ), context );
            this.fs.copyTpl( this.templatePath( '_bower.json' ), this.destinationPath( 'bower.json' ), context );
            this.fs.copyTpl( this.templatePath( 'app/index.html' ), this.destinationPath( 'app/index.html' ),context );
            this.fs.copyTpl( this.templatePath( 'app/src/app.js' ), this.destinationPath( 'app/src/app.js' ),context );

            /**
             * Copy Files
             */
            this.fs.copy( this.templatePath( 'editorconfig' ), this.destinationPath( '.editorconfig' ) );
            // this.fs.copy( this.templatePath( 'jshintrc' ), this.destinationPath( '.jshintrc' ) );
            this.fs.copy( this.templatePath( 'bowerrc' ), this.destinationPath( '.bowerrc' ) );
            this.fs.copy( this.templatePath( 'gitignore' ), this.destinationPath( '.gitignore' ) );
            this.fs.copy( this.templatePath( '_en.json' ), this.destinationPath( 'app/assets/i18n/en.json' ) );
            this.fs.copy( this.templatePath( 'favicon.ico' ), this.destinationPath( 'app/assets/medias/favicon.ico' ) );
            this.fs.copy( this.templatePath( 'Gruntfile.js' ), this.destinationPath( 'Gruntfile.js' ) );
                
            
            

        }
    },
    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install'],
            skipMessage: this.options['skip-message']
        });

            // this.on('dependenciesInstalled', function() {
            //     this.spawnCommand('grunt', ['serve']);
            //     this.log( 'Run grunt server and you are got to go' );
            // });
        


    },
    end: function(){
        this.log( '' );
        this.log( '######################################################' );
        this.log( '' );
        this.log( 'Run grunt serve and visit http://localhost:3000' );
        this.log( '' );
    }
} );