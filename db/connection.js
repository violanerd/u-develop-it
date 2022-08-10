const mysql = require('mysql2');
const p = require('../helpers');
// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MYSQL password
        password: p, // enter your password here
        database: 'election'
    },
    console.log('Connected to the election database.')
)

module.exports = db;