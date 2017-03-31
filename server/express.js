const indexRouter = require(__dirname + '/routes/home.js') // important for your routes in your routes folder
const overonsRouter = require(__dirname + '/routes/overons.js')
const reserverenRouter = require(__dirname + '/routes/reserveren.js')
const tarievenRouter = require(__dirname + '/routes/tarieven.js')


// Pug templates are in the 'views' folder and are client-side resources are in the 'public' folder.
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt');
const pg = require('pg')
// const db = require(__dirname + '/../modules/database.js')

// Pug
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

// Bodyparser
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({     // to ssupport URL-encoded bodies
    extended: false
})); 

// Express-session
//app.use(express.cookieParser());
// app.use(session({
//     secret: 'Very, very secret',
//     resave: true,
//     saveUninitialized: false
// }));

// Folder to serve to client-side
app.use('/Public', express.static('Public'));

// routers
app.use('/', indexRouter)
app.use('/overons', overonsRouter)
app.use('/reserveren', reserverenRouter)
app.use('/tarieven', tarievenRouter)

app.listen(3000, () => {
    console.log('Listening.')
})

module.exports = app