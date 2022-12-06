import { Container, Stack, Form, Button } from "react-bootstrap";
import React from "react";
import "../CSS/CurrTile.scss"

var survey_info = {
    "sid": 9,
    "user_email": "y@gmail.com",
    "title": "Shoe Survey",
    "description": "Shoe Survey",
    "survey_start": "2020-01-01T05:00:00.000Z",
    "survey_end": "2021-02-02T05:00:00.000Z"  }

export default function ResultsTile(props) {

    
    return(
        <Container fluid className="login-form p-3 rounded-4 shadow-lg bg-light-blue-color-class " >
            <Stack gap={1}>
                <Container className="fw-bold text-center h5" >
                    Questio {survey_info.sid}<br/>
                    {survey_info.user_email}<br/>
                    {survey_info.title}<br/>
                    {survey_info.survey_start.toString().substring(0,10)}<br/>
                    {survey_info.survey_end.toString().substring(0,10)}<br/>
                </Container>
            </Stack>
        </Container>
    );
}
