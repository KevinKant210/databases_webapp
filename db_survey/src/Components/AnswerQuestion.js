import { Container ,Form,Button,ButtonGroup,ToggleButton,ToggleButtonGroup} from "react-bootstrap";
import {React,useState,useEffect} from 'react';

export default function AnswerQuestion(props){
    console.log(props.currSurvey,props.currQuestion,props.question);

    const[answer,setAnswer] = useState("")

    

    function submitAnswer(num){
        console.log(answer);
    }
    
    return(
        <Container>

            <Container className="h-1">
                {props.question.question}

            </Container>
                <Container className={props.question.type == 1 ? "d-none": ""}>
                        <Form >
                        <Form.Group className="mb-3 h5" controlId="formDescription">
                                        <Form.Label>Answer</Form.Label>
                                        <Form.Control as="textarea" rows={3} onChange={e => setAnswer(e.target.value)}/>
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                        </Form.Group>

                        
                    </Form>

                    
            </Container>

            <Container className={props.question.type == 2 ? "d-none": ""}>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1} >
                <ToggleButton id="tbg-radio-1" value={1} variant="custom-red" onChange={e => setAnswer(1)}>
                1
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2} variant="custom-red" onChange={e => setAnswer(2)}>
                2
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={3} variant="custom-red" onChange={e => setAnswer(3)}>
                3
                </ToggleButton>
                <ToggleButton id="tbg-radio-4" value={4} variant="custom-red" onChange={e => setAnswer(4)}>
                4
                </ToggleButton>
                <ToggleButton id="tbg-radio-5" value={5} variant="custom-red" onChange={e => setAnswer(5)}>
                5
                </ToggleButton>
            </ToggleButtonGroup>
            </Container>

            <Button className="m-3" variant='custom-pink' onClick={e => submitAnswer()}>Submit</Button>
        </Container>
    )
}