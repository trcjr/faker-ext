module.exports = function( Faker ) {
    var continents = [ "isoAlpha2", "isoAlpha3", "africa", "antarctica", "asia", "europe", "north-america", "south-america", "oceania" ];

    Faker.Address.country = Faker.Address.country || {};

    continents.map(function( continent ) {
        Faker = require( './' + continent )( Faker );
    });

    Faker.Address.country.any = function () {
        var rndContinent = Faker.random.array_element( continents ).replace( /-/gi, '_' );
        return Faker.Address.country[ rndContinent ]();
    };

    return Faker;
}