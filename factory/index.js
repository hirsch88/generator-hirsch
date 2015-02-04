'use strict';

var yeoman = require( 'yeoman-generator' );
var helper = require( './../helper' );
var chalk = require('chalk');

var FactoryGenerator = yeoman.generators.NamedBase.extend( {
    initializing: function() {
        this.pkg = helper.getPackage();
    },
    prompting: function() {
        var done = this.async();
        var prompts = [
            {
                type: 'string',
                name: 'description',
                message: 'Please describe your factory.',
                // default: ''
            },
            {
                type: 'string',
                name: 'requirements',
                message: 'Do you have requirements?',
                // default: ''
            },
            {
                type: 'string',
                name: 'arguments',
                message: 'Do you need arguments?',
                // default: '$q'
            },
            

            
        ];
        this.prompt( prompts, function( props ) {
            this.description = props.description;
            this.requirements = props.requirements;
            this.arguments = props.arguments;
            done();
        }.bind( this ) );
    },
    writing: function() {
        var context = helper.getContext(this.name);
        context.description = this.description;
        context.requirements = this.requirements;
        context.arguments = this.arguments;

        var target = 'app/src/common/services/' + context.capitalizedName + '.js';
        this.fs.copyTpl(
            this.templatePath( '_template.js' ),
            this.destinationPath( target ),
            context
        );
    },
    end: function(){
        console.log(chalk.bold.blue('Your factory has been created successfully!'));
    }
} );
module.exports = FactoryGenerator;