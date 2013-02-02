module.exports = function( Faker ) {
    Faker.Address.country.north_america = function () {
        return Faker.random.country_north_america();
    };



    Faker.random.country_north_america = function () {
        return Faker.random.array_element(Faker.definitions.country_north_america());
    };



    Faker.definitions.country_north_america = function() {
        return [ "Anguilla", "Antigua and Barbuda", "Aruba", "Bahamas", "Barbados", "Belize", "Bermuda", "Bonaire, Saint Eustatius and Saba", "British Virgin Islands", "Canada", "Cayman Islands", "Costa Rica", "Cuba", "Curacao", "Dominica", "Dominican Republic", "El Salvador", "Greenland", "Grenada", "Guadeloupe", "Guatemala", "Haiti", "Honduras", "Jamaica", "Martinique", "Mexico", "Montserrat", "Netherlands Antilles", "Nicaragua", "Panama", "Puerto Rico", "Saint Barthélemy", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Sint Maarten", "Trinidad and Tobago", "Turks and Caicos Islands", "U.S. Virgin Islands", "United States" ];
    };



    return Faker;
}