import { Container } from "react-bootstrap"
import QuestionRow from "./QuestionRow.js"

export default function QuestionTileContainer(props){

    return(
        <Container>
            <QuestionRow>
                Current Tile Goes Here
            </QuestionRow>
        </Container>
    )
}