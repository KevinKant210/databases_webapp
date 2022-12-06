import { Container,Stack } from "react-bootstrap"
import ResultsRow from "./ResultsRow.js"
import {React, useState, useEffect} from 'react';
import { getOwner, getQuestions } from "../apiCalls.js";


export default function ResultsTileContainer(props){

    const [isLoading, setLoading] = useState(true);
    const [respSet, setRespSet] = useState([]);
    const [isOwner,setIsOwner] = useState(false);
   
    
    
    useEffect( () => {
        const tempSets = []
        console.log("INFO: ",props.info );
        
        
        
        
        // console.log("Hi")
        // console.log(surveyID);
        if(props.currSurvey != 0){
            var data = getOwner(props.currSurvey).then((res) =>{
                    if( res[0].user_email == props.userEmail){
                        setIsOwner(true);
                    }else{
                        setIsOwner(false);
                    }

                    
                        
                    });

                    setRespSet(props.info);
        }else{

        }
        


        // var data = getSurveys(props.sortOwnerParam, props.sortDateParam,props.userEmail).then((res) => {
        //     if(res == null) {
                
        //     }else{
        //         for(var i = 0; i < res.length; i+=3){
        //         tempSets.push(res.slice(i,i+3));
                
        //     }
        //     }
            

        //     setRespSet(tempSets);
        // });
        
      
        
        setLoading(false);

        

    },[props.info]);

   
    

    return(
        <Container>
            <Stack>

                <ResultsRow info={respSet[0]}/>

                <ResultsRow info={respSet[1]}/>

                <ResultsRow info={respSet[2]}/>

            </Stack>
            {/* <ResultsRow info={props.info}>
                Current Tile Goes Here
            </ResultsRow> */}
        </Container>
    )
}