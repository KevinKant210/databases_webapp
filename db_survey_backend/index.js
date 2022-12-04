const mysql = require('mysql2/promise');

 async function getUsers(req, res){
    const mysql = require('mysql2/promise');

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port:"3306",
        password:'password',
        database:'mydb',
    });

    const [data] = await connection.execute('SELECT * FROM `users`');

    connection.end();
    console.log(data);

    return data;
}

const express = require('express');
const app = express();
const port = 3001;

app.get('/get_users',async (req,res) => {
    data = await getUsers();
    res.json(data[0]);
});

app.listen(port, ()=> {
    console.log("Listening on port " + port);
});


