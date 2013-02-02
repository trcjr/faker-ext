module.exports = function( Faker ) {
    Faker.Address.country.antarctica = function () {
        return Faker.random.country_antarctica();
    };



    Faker.random.country_antarctica = function () {
        return Faker.random.array_element(Faker.definitions.country_antarctica());
    };



    Faker.definitions.country_antarctica = function() {
        return [ "Antarctica", "Bouvet Island", "French Southern Territories", "Heard Island and McDonald Island", "South Georgia and the South Sandwich Islands" ];
    };



    return Faker;
}