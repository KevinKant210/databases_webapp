import { Container, Row,Stack } from "react-bootstrap";
import {motion} from "framer-motion";
import "../CSS/SurveyTile.scss"
export default function SurveyTile(props){

    //information format

    return(
        <Container>
            <motion.button 
                whileHover={{scale:1.2}}
                
                className="survey-tile-button">
            <Container className="survey-tile w-100 border rounded-2 border-custom-red m-2 p-1">
                
                <Container className="">
                    <Stack>
                        <Container className="overflow-hidden">
                            Title
                            {props.title}
                        </Container>

                        <Container className="overflow-hidden">
                            SID
                            {props.sid}
                        </Container>

                        <Container className="overflow-hidden">
                            End Date
                            {props.endDate}
                        </Container>

                        
                    </Stack>
                </Container>
                
            </Container>
            </motion.button>
        </Container>
    )
}