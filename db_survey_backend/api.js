
 
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
    

    return data;
}

async function queryUser(emailParam){
    const mysql = require('mysql2/promise');


    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port:"3306",
        password:'password',
        database:'mydb',
    });

    const [data] = await connection.execute(
        'SELECT * FROM `users` WHERE `user_email` = ?',
        [emailParam]);
    

    connection.end();
    

    return data;
    
}

async function createUser(emailParam,nameParam,passwordParam){
    const mysql = require('mysql2/promise');


    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port:"3306",
        password:'password',
        database:'mydb',
    });

    const [data] = await connection.execute(
        'INSERT INTO `users` values (?, ?,?)',
        [emailParam,nameParam,passwordParam], (error,results)=> {
            if(error) return res.json({error: error})
        });
    

    connection.end();
    

    return data;
    
}

module.exports.getUsers = getUsers ;
module.exports.queryUser = queryUser;
module.exports.createUser = createUser;
