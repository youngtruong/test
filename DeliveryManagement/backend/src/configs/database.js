const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'truong',
    database: 'delivery_management',
    port: 3307
});

db.connect((err) => {
    if (err) {
    console.log('Connected to database',err.stack);
    return;
    }
    console.log('Connected to database');
});

module.exports = db;