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

function isEmpty(data){
    if(Object.keys(data).length == 0){
        return null;
    }else{
        return data;
    }
}