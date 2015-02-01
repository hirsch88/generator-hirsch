'use strict';

var util = require( 'util' );
var yeoman = require( 'yeoman-generator' );
var helper = require( './../helper' );
var path = require( 'path' );
var fs = require( 'fs' );


var FactoryGenerator = yeoman.generators.NamedBase.extend( {

    init: function(){
        console.log( 'You called the factory subgenerator with the argument ' + this.name + '.' );
    },

    files: function(){

        // console.log(helper.pkg.name);

        var meta = helper.getMetaData( this.name );

        var context = {
            name  : meta.fileName,
            date  : helper.getCreationDate()
        };

        console.log(process.cwd());
        var pkg = require(path.join(process.cwd(), 'package.json'));
        console.log(pkg.name);

        // if( meta.moduleName !== undefined && meta.moduleName !== '' ){
        //     this.template( "template.js", "app/src/" + meta.modulePath + '/services/' + meta.fileName + '.factory.js', context );
        // }else{
        //     this.template( "template.js", "app/src/services/" + meta.fileName + '.factory.js', context );
        // }
    }
} );

module.exports = FactoryGenerator;