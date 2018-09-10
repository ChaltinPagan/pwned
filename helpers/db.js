const pgp = require('pg-promise')({});
const connectionString = 'postgres://localhost/pwned';
const db = pgp(connectionString);

module.exports = db;