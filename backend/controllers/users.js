const mongoose = require('mongoose');
const User = require('../models/User');

const findAllUsers = (req, res) => {
    User.find((err, users) => {
        err && res.status(500).send(err.message);

        res.status(200).json(users);
    });
};

const findById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        err && res.status(500).send(err.message);

        res.status(200).json(user); 
    });
};

const addUser = (req, res) => {
    let user = new User({
        id: Date.now(),
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });
    
    user.save((err, user) => {
        err && res.status(500).send(err.message);

        res.status(200).json(user);
    });
};

module.exports = {findAllUsers, findById, addUser};