const mysql = require('mysql2/promise');
const api = require('./api.js');
const getUsers = api.getUsers;
const queryUser = api.queryUser;
const createUser = api.createUser;
const getSurveys = api.getSurveys;

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

app.get('/get_users',async (req,res) => {
    data = await getUsers();
    res.json(data);
});

app.get('/query_user/:email',async (req, res, next) => {
    const emailParam = req.params.email
    console.log(emailParam);
    data = await queryUser(emailParam);
    res.json(data);
});

app.get('/getSurveys/:owner/:date/:user',async (req, res, next) => {
    console.log(req.params.owner,req.params.date,req.params.user);
    data = await getSurveys(req.params.owner,req.params.date,req.params.user);
    res.json(data);
    
});

app.post("/createSurvey/:title/:description/:userEmail/:startDate/:endDate/:sid", async (req,res,next) => {
    res.send("Hey!")
});

app.post('/create_user/:email/:name/:password', async (req,res) => {
    const [emailParams,nameParams,passwordParams] = [req.params.email,req.params.name,req.params.password];
    console.log(emailParams,nameParams,passwordParams);


    try {
        data = await createUser(emailParams,nameParams,passwordParams);
        res.send("Success");
    } catch (error) {
        res.send({error: 'Insert Error!'});
    }
    // data = await createUser(emailParams,nameParams,passwordParams);
    
    
});

app.listen(port, ()=> {
    console.log("Listening on port " + port);
});


