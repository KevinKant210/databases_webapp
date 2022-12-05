import { Container, Row,Stack } from "react-bootstrap";
import {motion} from "framer-motion";
import "../CSS/SurveyTile.scss"
export default function SurveyTile(props){

    //information format

    const startDateString = props.startDate.toString().substring(0,10);
    const endDateString = props.endDate.toString().substring(0,10);

    return(
        <Container>
            <motion.button 
                whileHover={{scale:1.2}}
                
                className="survey-tile-button">
            <Container className="survey-tile  border rounded-2  m-2 p-1 shadow-lg">
                
                <Container className="">
                    <Stack>
                        <Container className="overflow-hidden">
                            
                            {props.title}
                        </Container>

                        <Container className="overflow-hidden">
                            SID: 
                            {" " + props.sid}
                        </Container>

                        <Container>
                            Start Date:
                            {" " + endDateString}
                        </Container>


                        <Container className="overflow-hidden">
                            End Date: 
                            {" " + endDateString}
                        </Container>

                        
                    </Stack>
                </Container>
                
            </Container>
            </motion.button>
        </Container>
    )
}