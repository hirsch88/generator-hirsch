'use strict';
var path = require( 'path' );
var fs = require( 'fs' );
var chalk = require('chalk');

module.exports = {

    joinPath: function(array){
        return array.join('/');
    },

    getPackage: function(){
        return require( path.join( process.cwd(), 'package.json' ) );
    },

    getPaths: function(){
        return require( path.join( process.cwd(), 'grunt/config/paths.json' ) );
    },

    getContext: function(name, target){
        var pkg = this.getPackage();

        return {
            name: name,
            lowercaseName: this.firstCharToLowerCase(name),
            capitalizedName: this.firstCharToUpperCase(name),
            appName: pkg.name,
            prefix: pkg.prefix,
            date: this.getCreationDate(),
            arguments: this.arguments
        };
    },

    buildModuleDependencies: function(text){
      var s = '';
      var a = text.split(',');
      for (var i = 0; i < a.length; i++) {
        s += "'" + a[i] + "'";
        if (i != a.length - 1) {
          s += ', ';
        }
      }
      return s;
    },


    firstCharToUpperCase: function(text){
        if(text === undefined ) {
            return undefined
        }
        return text.substring(0,1).toUpperCase() + text.substring(1);
    },

    firstCharToLowerCase: function(text){
        if(text === undefined ) {
            return undefined
        }
        return text.substring(0,1).toLowerCase() + text.substring(1);
    },

    getCreationDate: function(){
        var today = new Date();
        var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return monthNames[today.getMonth()] + ', ' + today.getFullYear();
    },

    hirschSay: function(){
        var icon = '';

        icon += chalk.bold.grey('     /|        |\\                   \n');
        icon += chalk.bold.grey('  `__\\\\        //__\'              \n');
        icon += chalk.bold.grey('      ||      ||') + '         .---------------.     \n';
        icon += chalk.bold.grey('    \\__`\\     |\'__/') + '      |     ' + chalk.blue('happy') + '     |     \n';
        icon += chalk.bold.grey('      `_\\\\   //_\ ') + '        |   ' + chalk.bold('<') + chalk.bold.red('CODING') + chalk.bold('/> ') + '  |     \n';
        icon += '      _.,:---;,._        \'---------------\'    \n';
        icon += '      \\_:     :_/                              \n';
        icon += '        |@. .@|                                 \n';
        icon += '        |     |                                 \n';
        icon += '         \\' + chalk.red('.-.') + '/            \n';
        icon += '          ' + chalk.red('`-\'') + '             \n';


        return icon;
                  //    /|       |\
                  // `__\\       //__'
                  //    ||      ||
                  //  \__`\     |'__/
                  //    `_\\   //_'
                  //    _.,:---;,._
                  //    \_:     :_/
                  //      |@. .@|
                  //      |     |
                  //      ,\.-./ \
                  //      ;;`-' 
    }



};


