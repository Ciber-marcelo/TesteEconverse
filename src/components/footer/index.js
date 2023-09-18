import face from "../../assets/023-facebook.svg";
import insta from "../../assets/044-instagram.svg";
import youtube from "../../assets/116-youtube.svg";
import formas from "../../assets/formas_pagamento.svg";
import group from "../../assets/Group 831.svg";

import { Container, Container2, Title, P, F1, F2, F3, F4, P1, P2, P3, Final } from "./styles"

export function Footer() {
   return (
      <Container>
         <Container2>
            <F1>
               <Title>Sobre nós</Title>
               <P>CONHEÇA</P>
               <P>COMO COMPRAR</P>
               <P>INDICAÇÃO E DESCONTO</P>

               <div>
                  <img src={face} />
                  <img src={insta} />
                  <img src={youtube} />
               </div>
            </F1>

            <F2>
               <Title>FORMAS DE PAGAMENTO</Title>
               <P>FALE CONOSCO</P>
               <P>DÚVIDAS</P>
               <P>PRAZOS DE ENTREGA</P>
               <P>FORMAS DE PAGAMENTO</P>
               <P>POLÍTICA DE PRIVACIDADE</P>
               <P>TROCAS E DEVOLUÇÕES</P>
            </F2>

            <F3>
               <Title>FORMAS DE PAGAMENTO</Title>
               <img src={formas} />
            </F3>

            <F4>
               <P1>Cadastre-se e Receba nossas</P1>
               <P2>novidades e promoções</P2>
               <P3>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</P3>
               <div>
                  <input type="text" placeholder="SEU E-MAIL"></input>
                  <button>OK</button>
               </div>
            </F4>
         </Container2>

         <Final>
            <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
            <img src={group} />
         </Final>
      </Container>
   )
}