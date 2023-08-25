import { Container, Text, Icon, Img } from "./styles"

export function IconButton({ image, text }) {
   return (
      <Container>
         <Icon>
            <Img src={image} />
         </Icon>
         <p>
            <Text>{text}</Text>
         </p>
      </Container>
   )
}