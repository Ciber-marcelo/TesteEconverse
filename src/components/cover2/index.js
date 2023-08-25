import { Container, Img, Text1, Text2, Button, Gradient } from "./styles"

export function Cover2({ image, text1, text2, textButton }) {
   return (
      <Container>
         <Img src={image} />
         <Gradient></Gradient>
         <Text1>{text1}</Text1>
         <Text2>{text2}</Text2>
         <Button>{textButton}</Button>
      </Container>
   )
}