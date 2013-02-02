module.exports = function( Faker ) {
    Faker.Address.country.south_america = function () {
        return Faker.random.country_south_america();
    };



    Faker.random.country_south_america = function () {
        return Faker.random.array_element(Faker.definitions.country_south_america());
    };



    Faker.definitions.country_south_america = function() {
        return [ "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Falkland Islands", "French Guiana", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela" ];
    };



    return Faker;
}