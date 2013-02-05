module.exports = function( Faker ) {
    var Faker = Faker || require( 'Faker' );

    Faker = require( './redefine' )( Faker );


    Faker.random.boolean = function() {
        return ( Faker.random.number(2) === 0 ) ? true : false;
    }

    /**
     * @param {Object} options period&separator
     */
    Faker.random.time = function( options ) {
        var separator = ( options && options.separator ) ? options.separator : ':',
            period    = ( options && options.period )    ? options.period    : 24,
            ampm      = ( Faker.random.number(2) === 0 ) ? ' a.m.'           : ' p.m.',
            addZero   = function addZero( num ) { return ( num < 10 ) ? '0' + num : num; };

        if ( period != 12 ) ampm = '';

        return addZero( Faker.random.number(period) ) + separator + addZero( Faker.random.number(60) ) + ampm;
    }


    Faker = require( './address/index' )( Faker );
    

    return Faker;
}
