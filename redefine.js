module.exports = function( Faker ) {

    Faker.Helpers.randomNumber = function( max, min ) {
        return Faker.random.number( max, min );
    };
    Faker.random.number = function( max, min ) {
        var min = min || 0;

        return Math.floor( Math.random() * ( max - min + 1 ) + min );
    }

    return Faker;
}