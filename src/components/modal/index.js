import React from 'react'
import { Container, Design, P1, P2, P3, X } from "./styles"

export default function Modal({ isOpen, setModalOpen, image, info1, info2, info3, info4 }) {
   if (isOpen) {
      return (

         <Container>
            <Design>
               <img src={image} />
               <div>
                  <P1>{info1}</P1>
                  <P2>{info2}</P2>
                  <p>Veja mais detalhes do produto</p>
                  <P3>{info3}</P3>
                  <button>COMPRAR</button>
               </div>
               <X onClick={setModalOpen}>X</X>
            </Design>
         </Container>
      )
   }

   return null
}