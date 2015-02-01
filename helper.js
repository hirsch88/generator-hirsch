'use strict';
var path = require( 'path' );
var fs = require( 'fs' );



function firstCharToLowerCase( text ){
    if(text === undefined ) {
        return undefined
    }
    return text.substring(0,1).toLowerCase() + text.substring(1);
}

function firstCharToUpperCase( text ){
    if(text === undefined ) {
        return undefined
    }
    return text.substring(0,1).toUpperCase() + text.substring(1);
}

module.exports = {


    /**
     *
     * @returns {string}
     */
    getCreationDate: function(){
        var today = new Date();
        var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return monthNames[today.getMonth()] + ', ' + today.getFullYear();
    },

    /**
     *
     * @param input
     * @returns {{fileName: string, filePath: string}}
     */
    getMetaData: function( input ){
        var p, f, m, mp, a = [];

        // Cleans the input
        if( input.substr( 0, 1 ) === '/' ){
            input = input.substr( 1, input.length );
        }

        if( input.substr( input.length - 1 ) === '/' ){
            input = input.substr( 0, input.length - 1 );
        }

        var x = input.indexOf( '/' );
        var a = input.split( '/' );

        // File is located at the root folder
        if( x === (-1) ){
            f = input;
            m = undefined;
            p = undefined;
        }

        // if the module is located at the root folder
        else if( a.length === 1 ){
            m = a[ 0 ];
            f = a[ a.length - 1 ];
            p = undefined;
        }

        // Hole package :-)
        else{
            m = a[ a.length - 2 ];
            f = a[ a.length - 1 ];
            a.splice( a.length - 2, 2 );
            p = a.join( '/' );
        }

        m = firstCharToLowerCase( m );
        f = firstCharToLowerCase( f );
        p = firstCharToLowerCase( p );


        if( m === undefined && p === undefined ){
            m = '';
            mp = '';
            p = '';

        }else if( m === undefined ){
            m = '';
            mp = '';
            p += '/' + f;

        }else{
            if( p.length === 0 ){
                mp = m;
                p += m + '/' + f;
            }else{
                mp = p + '/' + m;
                p += '/' + m + '/' + f;
            }

        }

        return {
            fileName  : f,
            filePath  : p,
            moduleName: m,
            modulePath: mp
        }
    }


};

