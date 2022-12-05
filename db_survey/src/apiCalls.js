export async function getUsers(){
    
    const data = await fetch("http://localhost:3001/get_users").then(res => {
        const data = res.json();
        return data;
    }).then((data) => {
        
        return data;
    });

    return data;
}

export async function queryUser(user_email){
    const uri = 'http://localhost:3001/query_user/' + user_email;
    const data = await fetch(uri).then(res => {
        const data = res.json();
        return data
    }).then((data) =>{
        
        

        return data;
    })

    return isEmpty(data);
}

export async function getSurveys(ownerParams, dateParams,user){

    //needs work to set up waht actually is gonna happen
    const uri = "http://localhost:3001/getSurveys/" + ownerParams + "/" + dateParams + "/" + user;
    const data = await fetch(uri).then(res => {
        const data =res.json();
        return data;
    }).then((data) => {
        return data;
    })

    return isEmpty(data);
}

export async function createSurvey(titleParam, descriptionParam, userEmail,startDate,endDate){
    const uri = "http://localhost:3001/createSurvey/"+ titleParam+ "/" + descriptionParam + "/" + userEmail + "/" + startDate + "/" + endDate;
    
    const res = await fetch(uri,{
        method: 'POST',
    });

    return res;
}

export async function createUser(emailParam,nameParam,passwordParam){
    const uri = "http://localhost:3001/create_user/" + emailParam + "/" + nameParam + "/" + passwordParam;
    const res = await fetch(uri,{
        method: 'POST',
    })
}

function isEmpty(data){
    if(Object.keys(data).length == 0){
        return null;
    }else{
        return data;
    }
}