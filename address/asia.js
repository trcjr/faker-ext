module.exports = function( Faker ) {
    Faker.Address.country.asia = function () {
        return Faker.random.country_asia();
    };



    Faker.random.country_asia = function () {
        return Faker.random.array_element(Faker.definitions.country_asia());
    };



    Faker.definitions.country_asia = function() {
        return [ "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "British Indian Ocean Territory", "Brunei", "Cambodia", "China", "Christmas Island", "Cocos [Keeling] Islands", "Georgia", "Hong Kong", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Macau", "Malaysia", "Maldives", "Mongolia", "Myanmar [Burma]", "Nepal", "North Korea", "Oman", "Pakistan", "Palestinian Territories", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen" ];
    };



    return Faker;
}