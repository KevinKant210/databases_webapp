import { Container } from "react-bootstrap"
import CurrTile from "./CurrTile.js"

export default function CurrTileContainer(props){

    return(
        <Container>
            <CurrTile userEmail={props.userEmail}>
                Current Tile Goes Here
            </CurrTile>
        </Container>
    )
}