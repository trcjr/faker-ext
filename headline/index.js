module.exports = function( Faker ) {

    Faker.Headline = Faker.Headline || {};

    Faker = require( './standard' )( Faker );
    //Faker = require( './short' )( Faker );


    return Faker;
}