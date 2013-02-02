module.exports = function( Faker ) {
    Faker.Address.country.africa = function () {
        return Faker.random.country_africa();
    };



    Faker.random.country_africa = function () {
        return Faker.random.array_element(Faker.definitions.country_africa());
    };



    Faker.definitions.country_africa = function() {
        return [ "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Comoros", "Congo [DRC]", "Congo [Republic]", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Mayotte", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Réunion", "Saint Helena", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "Sudan", "Swaziland", "São Tomé and Príncipe", "Tanzania", "Togo", "Tunisia", "Uganda", "Western Sahara", "Zambia", "Zimbabwe" ];
    };



    return Faker;
}