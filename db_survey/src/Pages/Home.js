import React from 'react'
import {Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home(props){
    var navigator = useNavigate();
    const loginPath = "/";

    function goLogin(){
        navigator(loginPath);
    }
    return(
        <Container>
            Home Page
            <Button variant='custom-pink' onClick={e => goLogin()}>
                Go Login
            </Button>

        </Container>
    )
}