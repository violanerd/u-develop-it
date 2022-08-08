const express = require('express');
const mysql = require('mysql2');
const p = require('./helpers');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        password: p,
        database: 'election'
    },
    console.log('Connected to the election database.')
)

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// })

// db.query(`SELECT * FROM candidates WHERE id = ?`, 1, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row)
// })

// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(result);
// })
// const sql = `INSERT INTO CANDIDATES (id, first_name, last_name, industry_connected)
//                 VALUES (?, ?, ? ,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];
// db.query(sql, params, (err, result) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(result);
// })
//default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});