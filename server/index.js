require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const ctrl = require('./controller');
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET, 
}))

app.post('/create/house', ctrl.create)
app.get('/read/house', ctrl.read)

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`))