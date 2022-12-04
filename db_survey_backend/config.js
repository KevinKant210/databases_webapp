const mysql = require('mysql2/promise');
const db = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:'root',
    password:'password',
    database: 'mydb'
});

module.exports = db;