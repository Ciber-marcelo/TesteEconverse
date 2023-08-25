import React from 'react'
import { Container, Design } from "./styles"

// const BACKGROUND_STYLE = {
//   position: 'fixed',
//   top: '0',
//   bottom: '0',
//   left: '0',
//   right: '0',
//   backgroundColor: 'rgb(0,0,0, 0.7)',
//   zIndex: '1000'
// }

// const MODAL_STYLE = {
//   position: 'fixed',
//   width: '769px',
//   height: '299px',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%,-50%)',
//   padding: '150px',
//   backgroundColor: '#fff',
// }

export default function Modal({ isOpen, setModalOpen, children, image, info1, info2, info3, info4 }) {
   if (isOpen) {
      return (

         <Container>
            <Design>
               <img src={image}/>
               <p>{info1}</p>
               <p>{info2}</p>
               <p>{info3}</p>
               <p>{info4}</p>
               <button>COMPRAR</button>





               <div style={{ cursor: 'pointer' }} onClick={setModalOpen}>
                  x
               </div>
               <div>{children}</div>
               <button onClick={setModalOpen}>Fechar</button>
            </Design>
         </Container>
      )
   }

   return null
}