import React from 'react'
import {Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "../CSS/HomePage.scss"

export default function Home(props){
    var navigator = useNavigate();
    const loginPath = "/";

    function goLogin(){
        navigator(loginPath);
    }
    return(
        <Container fluid className='border'>
            Home Page
            
            <Button variant='custom-pink' onClick={e => goLogin()}>
                Go Login
            </Button>
            

        </Container>
    )
}