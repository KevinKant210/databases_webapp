import {isValidElement, React,useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container,Form,Button, Row, Stack ,Col} from "react-bootstrap";
import "../CSS/LoginForm.scss"

function queryDB(){
    
}

export default function LoginForm(props){

    var navigate = useNavigate();
    const homePath = "/Home";
    const [isLogin,setIsLogin] = useState(!false);
    const [validated,setValidated] = useState();
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [signUpPasswordConfirm, setSignUpPasswordConfirm] = useState("");
    const [logInEmail,setLogInEmail]= useState("");
    const [logInPassword, setLogInPassword] = useState("");

   

    
   const submitLoginIn = () =>{
    const loginEmailTag = document.getElementById("formLoginEmail");
    const loginPasswordTag = document.getElementById("formLoginPassword");

    if(logInEmail.length == 0){
        loginEmailTag.setCustomValidity("Please Enter a Email");
        loginEmailTag.reportValidity();
       
        return;
    }else if(loginEmailTag.validity.typeMismatch){
        loginEmailTag.setCustomValidity("Please Enter a Valid Email");
        loginEmailTag.reportValidity();
        return;
    }else{
        loginEmailTag.setCustomValidity("")
    }

    if(logInPassword.length == 0){
        loginPasswordTag.setCustomValidity("Please Enter a Password");
        loginPasswordTag.reportValidity();
       
        return
    }else{
        loginPasswordTag.setCustomValidity("");
    }

    setValidated(true);

    //check if if valid login if valid -> go to home page else pop up error
    // navigate(homePath);
   }

  
   function  submitSignUp(){


    //this grabs the html tags from the DOM and then checks their validity against their defined
    const email = document.getElementById('formSignUpEmail');
    const password = document.getElementById('formSignUpPassword');
    const validationPassword = document.getElementById("formSignUpPasswordConfirm");
    
    
    if(email.validity.typeMismatch){
        email.setCustomValidity("Please Use A Valid Email!");
        email.reportValidity();
        setValidated(false);
        return;
    }else{
        email.setCustomValidity("");
        
    }

   

    if(password.validity.valueMissing){
        password.setCustomValidity("Please Enter A Password")
        password.reportValidity();
        setValidated(false);
        return;
    }else{
        password.setCustomValidity("");
    }

    if(validationPassword.validity.valueMissing){
        validationPassword.setCustomValidity("Please Re-Enter Password");
        validationPassword.reportValidity();
        setValidated(false);
        return;
    }else if(!(signUpPassword === signUpPasswordConfirm)){
        validationPassword.setCustomValidity("Passwords Need to Match!");
        validationPassword.reportValidity();
        setValidated(false);
        return;
    }else{
        validationPassword.setCustomValidity("");
    }

    setValidated(true);

    //Here is wher you would make sign up request through API to databse
   }

    return(
        <Container fluid className="login-form p-5 rounded-3 shadow-lg">
            <Stack gap={3}>
                <Container className="fw-bold" >
                    {!isLogin ? "SIGN UP" : 'LOGIN'}
                </Container>

                {/* Form For Sign Up */}
                <Container className={isLogin ? "d-none": ""} >

                    <Form    validated={validated}>
                        
                            <Form.Group controlId="formSignUpEmail" className="form-standard "  >
                                <Form.Label className="">Email address</Form.Label>
                                <Form.Control
                                onChange={e => setSignUpEmail(e.target.value)}
                                required
                                
                                type="email" 
                                placeholder="Enter Email" 
                                className="form-control w-80"
                                />
                                
                                
                            </Form.Group>

                            <Form.Group controlId="formSignUpPassword" className="form-standard">
                                <Form.Label className="">Password</Form.Label>
                                <Form.Control 
                                onChange={e => setSignUpPassword(e.target.value)}
                                required
                                
                                type="Password" 
                                placeholder="Password" 
                                className="w-80"
                                />

                            </Form.Group>

                            <Form.Group controlId="formSignUpPasswordConfirm" className="form-standard">
                                <Form.Label className="">Re-Enter Password</Form.Label>
                                <Form.Control 
                                onChange={e => setSignUpPasswordConfirm(e.target.value)}
                                required
                                type="Password" 
                                placeholder="Re-Enter Password" 
                                className="w-80"/>

                            </Form.Group>

                        
                    
                    </Form>
                </Container>

                {/* Form For Login */}

                <Container className={isLogin ? "": "d-none"}>
                    <Form validated={validated} >
                        <Form.Group controlId="formLoginEmail" className="form-standard" >
                            <Form.Label className="">Email address</Form.Label>
                            <Form.Control 
                            onChange={e => setLogInEmail(e.target.value)}
                            required
                            type="email" 
                            placeholder="Enter Email" 
                            className="form-control w-80"/>
                            
                        </Form.Group>

                        <Form.Group controlId="formLoginPassword" className="form-standard">
                            <Form.Label className="">Password</Form.Label>
                            <Form.Control
                             onChange={e => setLogInPassword(e.target.value)}
                             required
                             type="Password" 
                             placeholder="Password" 
                             className="w-80"/>

                        </Form.Group>

                    </Form>

                    

                </Container>
                
                <Container className="d-flex justify-content-center">
                    <Button className= {"sign-up-button text-white w-75 justify-content-center " + (!isLogin ? "" : "d-none")} variant="custom-pink" type="submit" onClick={e => submitSignUp()}>
                        Sign Up!
                    </Button>

                    <Button className={"sign-up-button text-white w-75 justify-content-center " + (isLogin ? "" : "d-none")} variant="custom-pink" type="submit" onClick={e => submitLoginIn()}>
                        Login!
                    </Button>

                    <Button className="btn-primary" variant="custom-pink" onClick={e => queryDB()}>
                        Test DB
                    </Button>
                </Container>

                <Container className="">
                    <Button className={"m-0 p-0 text-decoration-underline " + (!isLogin ? "" :"d-none")} variant="" onClick={e => setIsLogin(true)}>
                        LOGIN
                    </Button>
                    
                    <Button className={"m-0 p-0 text-decoration-underline " + (isLogin ? "" :"d-none")} variant="" onClick={e => setIsLogin(false)}>
                        Sign Up!
                    </Button>

                </Container>
            </Stack>
            
        </Container>
    )
}