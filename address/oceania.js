module.exports = function( Faker ) {
    Faker.Address.country.oceania = function () {
        return Faker.random.country_oceania();
    };



    Faker.random.country_oceania = function () {
        return Faker.random.array_element(Faker.definitions.country_oceania());
    };



    Faker.definitions.country_oceania = function() {
        return [ "American Samoa", "Australia", "Cook Islands", "East Timor", "Fiji", "French Polynesia", "Guam", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Caledonia", "New Zealand", "Niue", "Norfolk Island", "Northern Mariana Islands", "Palau", "Papua New Guinea", "Pitcairn Islands", "Samoa", "Solomon Islands", "Tokelau", "Tonga", "Tuvalu", "U.S. Minor Outlying Islands", "Vanuatu", "Wallis and Futuna" ];
    };



    return Faker;
}