import { Container ,Button,Row,Stack} from "react-bootstrap";
import {React,  useEffect, useState } from 'react';
import SurveyTile from "./SurveyTile";
import SurveyRow from "./SurveyRow";



export default function SurveyTileContainer(props){

    const surveys = [
        "survey1",
        "survey2",
        "survey3",
        "survey4",
        "survey5",
        "survey6",
    ]
    
    const [isLoading, setLoading] = useState(true);
    const [surveySets, setSurveySets] = useState([]);
    

    useEffect( () => {
        const tempSets = []
        for(var i = 0 ; i < surveys.length; i+=3){
            
            tempSets.push(surveys.slice(i,i+3));
        }

        setSurveySets(tempSets);
        setLoading(false);

        

    },[props.userEmail]);

   
    
    

    

    return (
        <Container className=" border d-flex  survey-container bg-custom-blue">

            <Stack>
                
                
                {isLoading ? "Loading! ": surveySets.map(surveySet =>  (
                    <SurveyRow surveySet={surveySet} key={surveySet}/>
                ))};
                
               

            </Stack>
           

            
            
        </Container>
    )
}