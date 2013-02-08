module.exports = function( Faker ) {
    var continents = [ "africa", "antarctica", "asia", "europe", "north-america", "south-america", "oceania" ];

    Faker.Address.country = Faker.Address.country || {};

    continents.map(function( continent ) {
        Faker = require( './' + continent )( Faker );
    });

    /**
     * temporary alias. shame on me :(
     */
    Faker.Address.country.anyContenent = function () {
        return 'method renamed to any';
    };

    Faker.Address.country.any = function () {
        var rndContinent = Faker.random.array_element( continents ).replace( /-/gi, '_' );
        return Faker.Address.country[ rndContinent ]();
    };


    return Faker;
}