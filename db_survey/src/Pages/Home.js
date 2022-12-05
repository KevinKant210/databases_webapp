import {React,useState} from 'react'
import {Button, Container,Row,Col,Stack, Navbar, NavDropdown} from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import CurrTileContainer from '../Components/CurrTileContainer';
import SurveyTile from '../Components/SurveyTile';
import SurveyTileContainer from '../Components/SurveyTilesContainer';
import "../CSS/HomePage.scss"

export default function Home(props){


    var navigator = useNavigate();
    const loginPath = "/";
  

    document.body.classList.add("home-body-class");

    const location = useLocation();
    const [userEmail, setUserEmail] = useState(location.state.user_email);
    


    function goLogin(){
        navigator(loginPath);
    }

    return(
        <Container fluid className='border d-flex home-page-container'>
            {/* Home Page
            
            <Button variant='custom-pink' onClick={e => goLogin()}>
                Go Login
            </Button> */}
            <Row className='d-flex w-100 p-0 m-0'>
                
                <Col  className='survey-container w-60 border d-flex justify-content-start'>
                    <Stack>
                        <Navbar bg='custom-red' className='navbar-class'>
                            <Navbar.Brand className='navbar-class m-1 p-1 h-2'>ToolBar:</Navbar.Brand>
                            <NavDropdown title='Sort By Date' id='nav-dropdown' className='m-2'>
                                <NavDropdown.Item href="">Sort By Inactive</NavDropdown.Item>
                                <NavDropdown.Item href="">Sort By Active</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title='Sort By Owner' id='nav-dropdown' className='m-2'>
                                <NavDropdown.Item href="">Show My Surveys</NavDropdown.Item>
                                <NavDropdown.Item href="">Show All Surveys</NavDropdown.Item>
                            </NavDropdown>

                            <Button variant='custom-white' onClick={e => goLogin()}>
                                Sign out
                            </Button>
                        </Navbar>

                        <Container>
                            <SurveyTileContainer className='w-100 m-0 p-0' userEmail={userEmail}/>
                        </Container>
                        
                    </Stack>
                    
                </Col>

                <Col  className='curr-container w-40  border'>
                    <CurrTileContainer/>
                </Col>
            </Row>
            
            

        </Container>
    )
}