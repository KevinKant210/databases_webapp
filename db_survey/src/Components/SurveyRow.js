import { Stack,Col } from "react-bootstrap";
import React from "react";
import SurveyTile from "./SurveyTile";

export default function SurveyRow(props){
    
   

    return(
    <Stack direction="horizontal" gap={5} className='d-flex '>
                

                 {props.surveySet.map(survey => (
                    
                    <SurveyTile title={survey.title} sid={survey.sid} startDate={survey.survey_start} endDate={survey.survey_end} setCurrSurvey={props.setCurrSurvey}key={survey}/>
                    
                 ))}

                 {/* <SurveyTile />

                 <SurveyTile/>

                 <SurveyTile/> */}

    </Stack>
    )
}