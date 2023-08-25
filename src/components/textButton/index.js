import { Container, Text } from "./styles"

export function TextButton({ image, text }) {
   return (
      <Container>
         <img src={image} />
         <p>
            <Text>{text}</Text>
         </p>
      </Container>
   )
}