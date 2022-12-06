import { Container, Stack, Form, Button } from "react-bootstrap";
import {React,useEffect,useState} from "react";
import QuestionTile from "./QuestionTile";
import { addQuestion } from "../apiCalls";
import "../CSS/CurrTile.scss"

export default function QuestionRow(props){
    
    

    const [question,setQuestion] = useState("");
    const [currType, setCurrType] = useState(1);
    const [qnum,setQnum] = useState(1);

    

    function handleQuestionSubmit(){
       
        var data = addQuestion(props.sid,qnum,question,currType).then((res)=>{
            setQnum(qnum+1);

        })

        document.getElementById("formQuestion").value = "";
        
    }
    

    
    return(
        <Container  fluid className="login-form p-3 rounded-4 shadow-lg bg-color-class ">
            <Container>
                <Container className="fw-bold text-center h2 ">
                        Create Questions
                </Container>
                    <Form className="login-form p-3 rounded-4 shadow-lg bg-light-blue-color-class" >
                        <Form.Group className="mb-3 h5" controlId="formQuestion">
                            <Form.Label>Enter Question</Form.Label>
                            <Form.Control as="textarea" rows={2} onChange={e => setQuestion(e.target.value)  }/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                            <Form className="mb-3 h5" controlId="formType">
                                <Form.Label>Question Type</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            onChange={e => setCurrType(1)}
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            onChange={e => setCurrType(2)}
                                        />
                                    </div>
                                ))}
                            </Form>

                        <Button variant='custom-white' type="button" className="fw-bold mt-3"  onClick={e => handleQuestionSubmit()}>
                            Add Question
                        </Button>
                    </Form>
                </Container>
            <Stack gap={5} className='d-flex justify-content-evenly'>
                        {/* {props.surveySet.map(survey => (
                            <SurveyTile title={survey} key={survey}/>
                        ))} */}
                        
                       

            </Stack>
        </Container>
    )
}