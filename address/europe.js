module.exports = function( Faker ) {
    Faker.Address.country.europe = function () {
        return Faker.random.country_europe();
    };



    Faker.random.country_europe = function () {
        return Faker.random.array_element(Faker.definitions.country_europe());
    };



    Faker.definitions.country_europe = function() {
        return [ "Albania", "Andorra", "Armen", "Austria", "Azerbaij", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Faroe Islands", "Finland", "France", "Georg", "Germany", "Gibraltar", "Greece", "Guernsey", "Hungary", "Iceland", "Ireland", "Isle of Man", "Italy", "Jersey", "Kazakhst", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Turk", "Ukraine", "United Kingdom", "Vatican City", "Åland Islands" ];
    };



    return Faker;
}