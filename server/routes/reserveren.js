// Pug templates are in the 'views' folder and are client-side resources are in the 'public' folder.
const express = require('express')
const app = express.Router()
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt');
const pg = require('pg')
// const db = require(__dirname + '/../../modules/database.js')


// get request index page
app.get('/', function(request, response){
    response.render('../../views/reserveren.pug');
});

app.post('/', function(request, response){
    if(request.body.email.length === 0){
        response.render('../../views/reserveren.pug')
        return
    }
    db.Gebruiker.create ({
        voornaam: 'Nard',
        achternaam: 'Lamboo',
        Telefoonnummer: '0641882183',
        email: 'nardlamboo@gmail.com'
    })
});


module.exports = app
console.log('index route werkt!')