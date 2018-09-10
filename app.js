const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

const pwned = require('./routes/pwned');
const users = require('./routes/users');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/pwned', pwned);
app.use('/users', users);

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'routes.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});