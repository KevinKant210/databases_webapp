import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../Components/LoginForm";
import "../CSS/LoginPage.scss"

export default function Login(props){
    document.body.classList.add("body-class");
    return(
        <Container fluid className="">
            <Container  fluid className="d-flex justify-content-center ">
                
                    <Col className='justify-content-center  p-3 form-container' md={4}>
                        <LoginForm className='' />
                    </Col>
                    
                    
            </Container>
        </Container>
    )
}