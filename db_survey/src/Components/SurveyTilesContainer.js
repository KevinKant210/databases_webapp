import { Container ,Button,Row,Stack} from "react-bootstrap";
import {React,  useEffect, useState } from 'react';
import SurveyTile from "./SurveyTile";
import SurveyRow from "./SurveyRow";
import { getSurveys } from "../apiCalls";



export default function SurveyTileContainer(props){

   
    
    const [isLoading, setLoading] = useState(true);
    const [surveySets, setSurveySets] = useState([]);
   
    

    useEffect( () => {
        const tempSets = []
        var data = getSurveys(props.sortOwnerParam, props.sortDateParam,props.userEmail).then((res) => {
            for(var i = 0; i < res.length; i+=3){
                tempSets.push(res.slice(i,i+3));
                
            }

            setSurveySets(tempSets);
        });
        
      
        
        setLoading(false);

        

    },[props.sortOwnerParam,props.sortDateParam]);

   
    
    

    

    return (
        <Container className=" border d-flex  survey-container ">

            <Stack>
                
                
                { surveySets.map(surveySet =>  (
                    <SurveyRow surveySet={surveySet} key={surveySet}/>
                ))};
                
               

            </Stack>
           

            
            
        </Container>
    )
}