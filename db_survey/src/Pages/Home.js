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
    const [sortDateParam, setSortDateParam] = useState("All");
    const [sortOwnerParam, setSortOwnerParam] = useState("All")

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
                                <NavDropdown.Item href="" onClick={e => setSortDateParam("Inactive")}>Sort By Inactive</NavDropdown.Item>
                                <NavDropdown.Item href="" onClick={e => setSortDateParam("Active")}>Sort By Active</NavDropdown.Item>
                                <NavDropdown.Item href="" onClick={e => setSortDateParam("All")}>Show All Surveys</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title='Sort By Owner' id='nav-dropdown' className='m-2'>
                                <NavDropdown.Item href="" onClick={e => setSortOwnerParam("My")}>Show My Surveys</NavDropdown.Item>
                                <NavDropdown.Item href="" onClick={e => setSortOwnerParam("All")}>Show All Surveys</NavDropdown.Item>
                            </NavDropdown>

                            <Button className='m-3' variant='custom-white ' onClick={e => window.location.reload()}>
                                Refresh
                            </Button>

                            <Button className="m-3 w-25" variant='custom-white' onClick={e => goLogin()}>
                                Sign out
                            </Button>

                            <Container className='m-3'>
                                Showing
                                {!(sortOwnerParam == sortDateParam) ? " " + sortOwnerParam + " " + sortDateParam: "   All"}
                            </Container> 
                        </Navbar>

                        <Container>
                            <SurveyTileContainer className='w-100 m-0 p-0' userEmail={userEmail} sortDateParam={sortDateParam} sortOwnerParam={sortOwnerParam}/>
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