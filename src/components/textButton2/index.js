import { Container, Text } from "./styles"

export function TextButton2({ text }) {
   return (
      <Container>
         <p>
            <Text>{text}</Text>
         </p>
      </Container>
   )
}