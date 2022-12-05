import { Stack } from "react-bootstrap";
import React from "react";
import SurveyTile from "./SurveyTile";

export default function SurveyRow(props){
    
    console.log(props.surveySet);

    return(
    <Stack direction="horizontal" gap={5} className='d-flex justify-content-evenly'>
                

                 {/* {props.surveySet.map(survey => (
                    <SurveyTile title={survey} key={survey}/>
                 ))} */}

                 <SurveyTile />

                 <SurveyTile/>

                 <SurveyTile/>

    </Stack>
    )
}