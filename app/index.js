'use strict';

var yeoman = require( 'yeoman-generator' );
var helper = require( './../helper' );
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
                name: 'description',
                message: 'Describe your app: '
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
            this.description = props.description;
            this.author = props.author;
            if ( this.appName !== path.basename( process.cwd() ) ) {
                this.destinationRoot( this.appName )
            }
            done();
        }.bind( this ) );
    },
    writing: {
        app: function() {
            var path = require(this.templatePath('build/config/paths.json'));

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
                appTitle:       this.appTitle,
                appName:        this.appName,
                appSign:        this.appSign,
                author:         this.author,
                description:    this.description,
                date:           getCreationDate(),
                main:           helper.joinPath([path.srcDir, path.main]),
                bowerDir:       helper.joinPath([path.srcDir, path.libDir]),
                mediaDir:       helper.joinPath([path.srcDir, path.asset.mediaDir]),
                coreDir:        path.coreDir
            };

            this.fs.copy( 
                this.templatePath( 'favicon.ico' ), 
                this.destinationPath( helper.joinPath([path.srcDir,path.asset.mediaDir]) + '/favicon.ico' ) 
            );

            this.mkdir( helper.joinPath([path.srcDir,path.asset.cssDir])); 

            this.fs.copy( 
                this.templatePath( '_en.json' ), 
                this.destinationPath( helper.joinPath([path.srcDir,path.asset.i18nDir]) + '/en.json' ) 
            );
             
            this.fs.copy( 
                this.templatePath( 'gitkeep' ), 
                this.destinationPath( helper.joinPath([path.srcDir,path.asset.fontDir]) + '/.gitkeep' ) 
            );

            this.fs.copy( 
                this.templatePath( 'gitkeep' ), 
                this.destinationPath( helper.joinPath([path.srcDir,path.core.common.serviceDir]) + '/.gitkeep' ) 
            );

            this.fs.copy( 
                this.templatePath( 'gitkeep' ), 
                this.destinationPath( helper.joinPath([path.srcDir,path.core.common.directiveDir]) + '/.gitkeep' ) 
            );

            this.fs.copy( 
                this.templatePath( 'gitkeep' ), 
                this.destinationPath( helper.joinPath([path.srcDir,path.core.common.filterDir]) + '/.gitkeep' ) 
            );

            this.fs.copy( 
                this.templatePath( 'gitkeep' ), 
                this.destinationPath( helper.joinPath([path.srcDir,path.core.common.templateDir]) + '/.gitkeep' ) 
            );

            this.fs.copy( 
                this.templatePath( 'gitkeep' ), 
                this.destinationPath( helper.joinPath([path.srcDir,path.core.common.templateDir]) + '/.gitkeep' ) 
            );

            this.fs.copy( 
                this.templatePath( 'gitkeep' ), 
                this.destinationPath( helper.joinPath([path.srcDir, path.coreDir]) + '/w3tec/.gitkeep' ) 
            );

            this.directory(
                this.templatePath('less'),
                this.destinationPath(helper.joinPath([path.srcDir, path.asset.lessDir]))
            );

            this.directory(
                this.templatePath('build'),
                this.destinationPath('build')
            );

            this.mkdir( path.testDir );
            // ToDo
            // this.directory(
            //     this.templatePath('test'),
            //     this.destinationPath('test')
            // );

            this.fs.copyTpl( 
                this.templatePath( helper.joinPath([path.srcDir, path.main]) ), 
                this.destinationPath( helper.joinPath([path.srcDir, path.main]) ),context 
            );

            this.fs.copyTpl( 
                this.templatePath( helper.joinPath([path.srcDir, path.core.app]) ), 
                this.destinationPath( helper.joinPath([path.srcDir, path.core.app]) ),context 
            );
    
            /**
             * Config files
             */
            this.fs.copyTpl( this.templatePath( '_package.json' ), this.destinationPath( 'package.json' ), context );
            this.fs.copyTpl( this.templatePath( '_bower.json' ), this.destinationPath( 'bower.json' ), context );
            this.fs.copyTpl( this.templatePath( 'bowerrc' ), this.destinationPath( '.bowerrc' ), context );
            this.fs.copy( this.templatePath( 'editorconfig' ), this.destinationPath( '.editorconfig' ) );
            this.fs.copy( this.templatePath( 'gitignore' ), this.destinationPath( '.gitignore' ) );
            this.fs.copy( this.templatePath( 'Gruntfile.js' ), this.destinationPath( 'Gruntfile.js' ) );

            /**
             * Sample data
             */
            this.fs.copyTpl( 
                this.templatePath( helper.joinPath([path.srcDir, path.coreDir]) + '/home/Home.js' ), 
                this.destinationPath( helper.joinPath([path.srcDir, path.coreDir]) + '/home/Home.js' ),context 
            );
            this.fs.copy( 
                this.templatePath( helper.joinPath([path.srcDir, path.coreDir]) + '/home/Home.html' ), 
                this.destinationPath( helper.joinPath([path.srcDir, path.coreDir]) + '/home/Home.html' ) 
            );   
             
            
        }
    },
    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install'],
            skipMessage: this.options['skip-message']
        });        
    },
    end: function(){
        this.log( '' );
        this.log( '#########################################################################################' );
        this.log( '' );
        this.log( chalk.bold.green('Ready to go, have fun!') );
        this.log( '' );
        this.log( 'Go to your project folder and run '+ chalk.bold.blue('grunt serve'));
        this.log('Now visit your app on ' + chalk.bold.blue('http://localhost:3000') );
        this.log( '' );
    }
} );