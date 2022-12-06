import { Container,Stack } from "react-bootstrap";
import {motion} from "framer-motion"
import React from "react";

export default function DisplayRow(props){
    const question = props.question
    console.log(question);

    function clicked(){
        console.log("click");
    }


    return(
        <Container>
            <motion.button 
                whileHover={{scale:1.1}}
                onClick={e => clicked()}
                className="survey-tile-button">
            <Container className="survey-tile  border rounded-2  m-2 p-1 shadow-lg">
                
                <Container className="">
                    <Stack>



            <Container>
                Question Number:
                {" " + question.qnum}
            </Container>

            <Container>
                Question:
                {" " + question.question}
            </Container>

            <Container>
                Question Type: 
                {" " + question.type}
            </Container>


            </Stack>
                </Container>
                
            </Container>
            </motion.button>
        </Container>
    )
}

