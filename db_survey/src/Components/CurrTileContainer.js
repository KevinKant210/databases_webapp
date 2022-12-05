import { Container } from "react-bootstrap"
import CurrTile from "./CurrTile.js"

export default function CurrTileContainer(props){

    return(
        <Container>
            <CurrTile>
                Current Tile Goes Here
            </CurrTile>
        </Container>
    )
}