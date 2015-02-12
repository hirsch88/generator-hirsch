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
                message: 'Please describe your constant.'
            }
        ];
        this.prompt( prompts, function( props ) {
            this.description = props.description;
            done();
        }.bind( this ) );
    },
    writing: function() {
        var context = helper.getContext(this.name);
        context.description = this.description;
        context.uppercase = context.capitalizedName.toUpperCase();

        var target = this.paths.srcDir + '/' + this.paths.core.common.constantDir +  '/' + context.capitalizedName + '.js';
        this.fs.copyTpl(
            this.templatePath( 'constant' ),
            this.destinationPath( target ),
            context
        );
    },
    end: function(){
        console.log(chalk.bold.blue('Your constant has been created successfully!'));
    }
} );
module.exports = FactoryGenerator;
