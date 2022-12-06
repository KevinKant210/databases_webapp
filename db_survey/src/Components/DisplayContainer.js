
import {React,useEffect,useState} from "react";
import { Container } from "react-bootstrap";
import { getOwner, getQuestions } from "../apiCalls";
import DisplayRow from "./DisplayRow";


export default function DisplayContainer(props){

    const[isOwner,setIsOwner] = useState(false);
    const [questionSet, setQuestionSet] = useState([]);

    useEffect( () => {
        const tempSets = []

        console.log("Hi",props.currSurvey);
       
        if(props.currSurvey != 0){
            
            var data = getQuestions(props.currSurvey).then((res) => {
                setQuestionSet(res);
                getOwner(props.currSurvey).then((res) => {
                    if(res[0].user_email == props.userEmail){
                        
                        setIsOwner(true);
                    }else{
                        
                        setIsOwner(false);
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

    

    return(
        <Container>

            {questionSet.length == 0 ? " Nothing found" : questionSet.map(question =>(
                
                    <DisplayRow question={question} key={question}/>
                ))}

        </Container>
    )
}