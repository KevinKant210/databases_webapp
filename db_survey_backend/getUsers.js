const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port:"3306",
    password:'password',
    database:'mydb',
});

connection.query(

    'SELECT * FROM mydb.users' ,
    function(err, results, fields){
        console.log(results);
        
    }
);