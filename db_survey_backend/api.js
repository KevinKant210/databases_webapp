
 
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

async function getSurveys(ownerParams, dateParams, userEmail){
    const mysql = require('mysql2/promise');


    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port:"3306",
        password:'password',
        database:'mydb',
    });

    const params = ownerParams + ' ' + dateParams;
    const user =  userEmail ;
    var query = "";

    console.log(params)
    switch (params) {
        case "All All":
            query = "SELECT * FROM surveys";
            break;
    
        case "All Active":
            query = "SELECT * FROM surveys WHERE `survey_end` >= CURDATE()";
            break;

        case "All Inactive":
            query = "SELECT * FROM surveys WHERE `survey_end` < CURDATE()";
            break;
        case "My All":
                query = "SELECT * FROM surveys WHERE `user_email` = " + "'" + userEmail + "'" ;
                break;
        
        case "My Active":
                query = "SELECT * FROM surveys WHERE `user_email` = "  + "'" + userEmail + "'" + " AND `survey_end` >= CURDATE()";
                break;
    
        case "My Inactive":
            query = "SELECT * FROM surveys WHERE `user_email` = " + "'" + userEmail + "'" +  " AND `survey_end` < CURDATE()";
                break;
    }

    const [data] = await connection.execute(
        query
        );
    

    connection.end();
    

    return data;
}

async function createSurvey(titleParam, descriptionParam, userEmail,startDate,endDate,sid){

}

module.exports.getUsers = getUsers ;
module.exports.queryUser = queryUser;
module.exports.createUser = createUser;
module.exports.getSurveys = getSurveys;
module.exports.createSurvey = createSurvey;