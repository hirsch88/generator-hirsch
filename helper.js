'use strict';
var path = require( 'path' );
var fs = require( 'fs' );

module.exports = {

    joinPath: function(array){
        return array.join('/');
    },

    getPackage: function(){
        return require( path.join( process.cwd(), 'package.json' ) );
    },

    getPaths: function(){
        return require( path.join( process.cwd(), 'build/config/paths.json' ) );
    },

    getContext: function(name, target){
        var pkg = this.getPackage();

        return {
            name: name,
            lowercaseName: this.firstCharToUpperCase(name),
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

    getHirschIcon: function(){
        return "      /|       |\
                  `__\\\\       //__'
                     ||      ||
                   \\__`\\     |'__/
                     `_\\\\   //_'
                     _.,:---;,._
                     \\_:     :_/
                       |@. .@|
                       |     |
                       ,\\.-./ \\
                       ;;`-'   `---__________-----.-.
                       ;;;                         \\_\\
                       ';;;                         |
                        ;    |                      ;
                         \\   \\     \\        |      /
                          \\_, \\    /        \\     |\\
                            |';|  |,,,,,,,,/ \\    \\ \\_
                            |  |  |           \\   /   |
                            \\  \\  |           |  / \\  |
                             | || |           | |   | |
                             | || |           | |   | |
                             | || |           | |   | |
                             |_||_|           |_|   |_|
                            /_//_/           /_/   /_/
        ";
    }



};


