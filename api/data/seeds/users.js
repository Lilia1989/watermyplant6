const bcrypt = require("bcryptjs");

exports.seed = function (knex) {

    return knex('users').insert([
        {
            username: 'admin',
            password: bcrypt.hashSync("password")    
        },
        {
            username: 'ownertest',
            password: bcrypt.hashSync("password")
        },
        {
            username: 'usertest',
            password: bcrypt.hashSync("password")
        },
        {
            "username": "monkey",
            "password": "banana"
        },
    ])

};