
import {React,useEffect,useState} from "react";
import { Container, Modal } from "react-bootstrap";
import { getOwner, getQuestions } from "../apiCalls";
import AnswerQuestion from "./AnswerQuestion";
import DisplayRow from "./DisplayRow";


export default function DisplayContainer(props){

    const[isOwner,setIsOwner] = useState(false);
    const [questionSet, setQuestionSet] = useState([]);
    const [currQuestion, setCurrQuestion] = useState(1);
    const [showResponse,setShowResponse] = useState(false);
    const [showQuestion,setShowQuestion] = useState(false);

    var trueOwner = false;

    useEffect( () => {
        const tempSets = []

        console.log("Hi",props.currSurvey);
       
        if(props.currSurvey != 0){
            
            var data = getQuestions(props.currSurvey).then((res) => {
                setQuestionSet(res);
                getOwner(props.currSurvey).then((res) => {
                    if(res[0].user_email == props.userEmail){
                        
                        setIsOwner(true);
                        trueOwner = true;
                    }else{
                        
                        setIsOwner(false);
                        trueOwner =false;
                    }
                })

                
            })

            

        }else{

        }
       
        
        // var data = getSurveys(props.sortOwnerParam, props.sortDateParam,props.userEmail).then((res) => {
        //     if(res == null) {
                
        //     }else{
        //         for(var i = 0; i < res.length; i+=3){
        //         tempSets.push(res.slice(i,i+3));
                
        //     }
        //     }
            

        //     setRespSet(tempSets);
        // });
        
      
        
        

        

    },[props.currSurvey]);

    const showModal =(qnum) => {

        
       
        setCurrQuestion(qnum);
        
        if(isOwner){
            setShowResponse(true);
        }else{
            setShowQuestion(true);
            
        }
    }

    return(
        <>
        <Container>
        <Modal show={showResponse} onHide={e => setShowResponse(false)}>
            <Modal.Header closeButton>Responses</Modal.Header>
            <Modal.Body>
                Responses
            </Modal.Body>
        </Modal>

        <Modal show={showQuestion} onHide={e => setShowQuestion(false)}>
            <Modal.Header closeButton>Question</Modal.Header>
            <Modal.Body>
                
                <AnswerQuestion currSurvey={props.currSurvey} currQuestion={currQuestion} question={questionSet[currQuestion-1]}/>
            </Modal.Body>
        </Modal>
        

            {questionSet.length == 0 ? " Nothing found" : questionSet.map(question =>(
                
                    <DisplayRow question={question} key={question} setCurrQuestion={showModal}/>
                ))}
                
                {/* <Modal show={showResponse} onHide={setShowResponse(false)}>
            <Modal.Header closeButton>Responses</Modal.Header>
            <Modal.Body>
                responses
            </Modal.Body>
        </Modal> */}
        </Container>

        

        </>
    )
}