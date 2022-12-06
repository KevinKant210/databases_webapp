import { Container, Stack } from "react-bootstrap";
import React from "react";
import ResultsTile from "./ResultsTile";
import "../CSS/CurrTile.scss"

export default function ResultsRow(props){
    
    console.log(props.info);

    return(
        <Container  fluid className="login-form p-3 rounded-4 shadow-lg bg-color-class ">
            <Container className="fw-bold text-center p-3 h2 rounded-4">
                Survey Results
            </Container>
            
            <Stack gap={5} className='d-flex justify-content-evenly'>
                        {/* {props.surveySet.map(survey => (
                            <SurveyTile title={survey} key={survey}/>
                        ))} */}
                        
                        <ResultsTile />

                        <ResultsTile/>

                        <ResultsTile/>

            </Stack>
        </Container>
    )
}