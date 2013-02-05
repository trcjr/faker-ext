module.exports = function( Faker ) {
    var continents = [ "africa", "antarctica", "asia", "europe", "north-america", "south-america", "oceania" ];

    Faker.Address.country = Faker.Address.country || {};

    continents.map(function( continent ) {
        Faker = require( './' + continent )( Faker );
    });

    Faker.Address.country.anyContenent = function () {
        var rndContinent = Faker.random.array_element( continents ).replace( /-/gi, '_' );
        return Faker.Address.country[ rndContinent ]();
    };


    return Faker;
}