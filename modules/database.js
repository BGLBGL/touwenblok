// ## Connection ##
const Sequelize = require('sequelize');


const db = {
    
}

db.connect = new Sequelize('fairbnb', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    dialect: 'postgres',
    host: 'localhost',
    define: {
        timestamps: false
    }
});

// Testing connection
db.connect
    .authenticate()
    .then(function(err) {
    console.log('Connection has been established successfully.');
}, function (err) {
    console.log('Unable to connect to the database:', err);
});

db.connect
//sync the models
    .sync({force:true})
    .then(function(){
    //then create first message
    return db.Gebruiker.create({
    	voornaam: 'Nard',
        achternaam: 'Lamboo',
        Telefoonnummer: '0641882183',
        email: 'nardlamboo@gmail.com'
    })
});

console.log('Dummy user is gemaakt');


module.exports = db;