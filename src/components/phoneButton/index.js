import { Container, Text1, Text2, Text3, Text4, Text5, Img } from "./styles"

export function PhoneButton({ image, text1, text2, text3, text4, text5, textButton, onClick }) {
   return (
      <Container>
         <Img src={image} />

         <Text1>{text1}</Text1>
         <Text2>{text2}</Text2>
         <Text3>{text3}</Text3>
         <Text4>{text4}</Text4>
         <Text5>{text5}</Text5>
         
         <button onClick={onClick} >{textButton}</button>
      </Container>
   )
}