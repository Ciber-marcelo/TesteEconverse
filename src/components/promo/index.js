import { Container, Color1, Color2 } from "./styles"

export function Promo({ image, text1, text2, text3 }) {
   return (
      <Container>
         <img src={image} />
         <p>
            <Color1>{text1}</Color1>
            <Color2>{text2}</Color2>
            <Color1>{text3}</Color1>
         </p>
      </Container>
   )
}