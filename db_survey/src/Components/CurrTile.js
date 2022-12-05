import { Container, Stack, Form, Button } from "react-bootstrap";
import "../CSS/CurrTile.scss"

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
    return(
        <Container fluid className="login-form p-5 rounded-3 shadow-lg bg-color-class " >
            <Stack gap={1}>
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
                            <Form.Control type="text"/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 h5" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 h5" controlId="formStartDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>
                        <Form.Group className="mb-3 h5" controlId="formEndDate">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>
                        <Button variant='custom-white' type="submit" className="fw-bold mt-3">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Stack>
        </Container>
    );
}

