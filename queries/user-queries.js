const db = require('../helpers/db');

const getUsers = (req, res, next) => {
    db.any('SELECT * FROM users ORDER BY id ASC')
        .then((data) => {
            res.status(200)
                .send({
                    users: data
                });
        })
        .catch((err) => {
            return next(err);
        });
}

const loginUser = (req, res, next) => {
    db.any('SELECT * FROM users WHERE email=${email}', req.body)
        .then(data => {
            if (data.length) {
                res.status(200)
                    .json({
                        status: 'success',
                        user: data[0].first_name,
                        message: 'Logged in'
                    });
            } else {
                res.status(204)
                    .json({
                        status: 'error',
                        user: data[0].email,
                        message: 'Email not on file'
                    });
            }
        })
        .catch((err) => {
            res.status(500)
                .json({
                    status: 'error',
                    error: err
                });
        });
};

const registerUser = (req, res, next) => {
    db.any('INSERT INTO users (first_name, email) VALUES (${first_name}, ${email})',
    {
      first_name: req.body.firstName,
      email: req.body.email
    })
    .then( user => req.body )
    .then(response => {
                res.status(200)
                    .json({
                        status: 'success',
                        data: response,
                        message: 'Registered one user'
                    });
    })
    .catch((err) => {
        res.status(500)
            .json({
                status: 'error',
                error: 'Error inserting user. Email already taken.'
            });
    });
};

module.exports = {
    getUsers,
    loginUser,
    registerUser
}