const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('./api/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', Users);

mongoose.connect('mongodb://localhost/users',
    { useNewUrlParser: true },
    (err, res) => { 
        err && console.log('Error connecting to the database: ' + err);
        app.listen(process.env.PORT, () => {
            console.log('Server running on port 4000');
        });
    }
);