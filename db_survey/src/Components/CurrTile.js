import { Container, Stack, Form, Button } from "react-bootstrap";
import "../CSS/CurrTile.scss"
import QuestionTileContainer from "./QuestionTileContainer";
import {React,useState} from "react";
import { createSurvey } from "../apiCalls";
import QuestionRow from "./QuestionRow";

var survey_info = {
    "sid": 9,
    "user_email": "y@gmail.com",
    "title": "Shoe Survey",
    "description": "Shoe Survey",
    "survey_start": "2020-01-01T05:00:00.000Z",
    "survey_end": "2021-02-02T05:00:00.000Z"  }

const email = document.getElementById('formBasicEmail');
const title = document.getElementById('formTitle');
const description = document.getElementById('formDescription');
const startDate = document.getElementById('formStartDate');
const endDate = document.getElementById('formEndDate');

export default function CurrTile(props) {


    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [title,setTitle] = useState("");
    const [showQuestion, setShowQuestion] = useState(false);

    
    function submitNewSurvey(){
        console.log(title,description,props.userEmail,startDate,endDate);
        const res = createSurvey(title,description,props.userEmail,startDate,endDate);

        console.log(res);

        setShowQuestion(true);
    }

    return(
        <Container fluid className="login-form p-5 rounded-3 shadow-lg bg-color-class " >
            <Stack gap={1} className={showQuestion ? "d-none" : ""}>
                <Container className="fw-bold text-center h2" >
                    Create Survey
                </Container>
                <Container>
                    <Form>
                        <Form.Group className="mb-3 h5" controlId="formBasicEmail">
                            <Form.Label>Email For Participants</Form.Label>
                            <Form.Control type="email"/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 h5" controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" onChange={e => setTitle(e.target.value)}/>
                            <Form.Text className="text-muted" >
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 h5" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={e => setDescription(e.target.value)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 h5" controlId="formStartDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" onChange={e => setStartDate(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3 h5" controlId="formEndDate">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" onChange={e=> setEndDate(e.target.value)}/>
                        </Form.Group>

                        

                        <Button variant='custom-white' type="button" className="fw-bold mt-3" onClick={e => submitNewSurvey()}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Stack>
            <Container className={!showQuestion ? "d-none" : ""}>
                <QuestionRow />
                <Button variant="custom-white" onClick={e => setShowQuestion(false)} className="m-4">
                    Done
                </Button>
            </Container>
            
        </Container>
    );
}

