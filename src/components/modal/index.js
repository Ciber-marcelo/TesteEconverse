import React, { useState } from 'react'
import { Container, Design, Left, Right, Exit, P1, P2, P3, P4, X, Conter, Button } from "./styles"

export function Modal({ isOpen, image, setModalOpen, info1, info2, info3 }) {

   const [cont, setCont] = useState(1)

   if (isOpen) {
      return (

         <Container>
            <Design>
               <Left>
                  <img src={image} />
               </Left>
               
               <Right>
                  <Exit>
                     <X onClick={setModalOpen}>X</X>
                  </Exit>
                  <P1>{info1}</P1>
                  <P2>R$ {info2}</P2>
                  <P3>{info3}</P3>
                  <P4>Veja mais detalhes do produto</P4>
                  <Conter>
                     <button onClick={() => setCont(cont - 1)}>
                        <p>-</p>
                     </button>
                     <p>{cont}</p>
                     <button onClick={() => setCont(cont + 1)}>
                        <p>+</p>
                     </button>
                  </Conter>
                  <Button>COMPRAR</Button>
               </Right>
               
            </Design>
         </Container>
      )
   }

   return null
}