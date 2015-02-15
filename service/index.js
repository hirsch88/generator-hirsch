'use strict';

var yeoman = require( 'yeoman-generator' );
var helper = require( './../helper' );
var chalk = require('chalk');

var FactoryGenerator = yeoman.generators.NamedBase.extend( {
    initializing: function() {
        this.pkg = helper.getPackage();
        this.paths = helper.getPaths();
    },
    prompting: function() {
        var done = this.async();
        var prompts = [
            {
                type: 'string',
                name: 'description',
                message: 'Please describe your service.'
            },
            {
                type: 'string',
                name: 'requirements',
                message: 'Enter your requirements?'
            },
            {
                type: 'string',
                name: 'arguments',
                message: 'Enter your arguments?'
            }

        ];
        this.prompt( prompts, function( props ) {
            this.description = props.description;
            this.requirements = props.requirements;
            this.arguments = props.arguments;
            done();
        }.bind( this ) );
    },
    writing: function() {
        //var pathConfig = require(this.templatePath('build/config/paths.json'));
        console.log(this.paths);

        var context = helper.getContext(this.name);
        context.description = this.description;
        context.requirements = this.requirements;
        context.arguments = this.arguments;

        var target = this.paths.srcDir + '/' + this.paths.core.common.serviceDir +  '/' + context.capitalizedName + '.js';
        this.fs.copyTpl(
            this.templatePath( 'template' ),
            this.destinationPath( target ),
            context
        );
    },
    end: function(){
        console.log(chalk.bold.blue('Your service has been created successfully!'));
    }
} );
module.exports = FactoryGenerator;
