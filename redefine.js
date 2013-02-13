module.exports = function( Faker ) {

    Faker.Helpers.randomNumber = function( range, min ) {
        return Faker.random.number( range, min );
    };
    Faker.random.number = function( range, min ) {
        var range = range - 1, // https://github.com/Marak/Faker.js/issues/41
            min = min || 0;

        return Math.floor( Math.random() * ( range - min + 1 ) + min );
    }

    return Faker;
}