import magnifyingGlass from "../../assets/MagnifyingGlass.svg"
import { Container, Input, Button, Img } from "./styles"

export function InputSearch() {
    return (
        <Container>
            <Input
                type="text"
                placeholder="O que você está buscando?"
            />
            <Button>
                <Img src={magnifyingGlass}/>
            </Button>
        </Container>
    )
}