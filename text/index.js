module.exports = function( Faker ) {

    Faker.Text = Faker.Text || {};

    Faker = require( './headline' )( Faker );


    return Faker;
}