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
                message: 'Please describe your value.'
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

        var target = this.paths.srcDir + '/' + this.paths.core.common.valueDir +  '/' + context.capitalizedName + '.js';
        this.fs.copyTpl(
            this.templatePath( 'value' ),
            this.destinationPath( target ),
            context
        );
    },
    end: function(){
        console.log(chalk.bold.blue('Your value has been created successfully!'));
    }
} );
module.exports = FactoryGenerator;
