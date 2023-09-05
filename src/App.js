import React, { useState, useEffect } from "react";

import truck from "../src/assets/Truck.svg";
import shieldCheck from "../src/assets/ShieldCheck.svg";
import creditCard from "../src/assets/CreditCard.svg";
import vtex from "../src/assets/Group 35.svg";
import heart from "../src/assets/Heart.svg";
import userCircle from "../src/assets/UserCircle.svg";
import box from "../src/assets/Group.svg";
import shoppingCart from "../src/assets/ShoppingCart.svg";
import crownSimple from "../src/assets/CrownSimple.svg";
import cover1 from "../src/assets/cover1.png";
import whiskey from "../src/assets/whiskey.png";
import corrida1 from "../src/assets/corrida 1.png";
import cuidados from "../src/assets/cuidados-de-saude 1.png";
import ferramentas1 from "../src/assets/ferramentas 1.png";
import moda1 from "../src/assets/moda 1.png";
import monitorarTablet from "../src/assets/monitorar-tablet-e-smartohone 1.png";
import supermercados1 from "../src/assets/supermercados 1.png";
import vectorL from "../src/assets/VectorL.svg";
import vectorR from "../src/assets/VectorR.svg";
import image45 from "../src/assets/image 45.png";

import {
  Main,
  Main2,
  Main3,
  Header,
  SearchHeader,
  Tabs,
  Tabs2,
  MainCover,
  MainCover2,
  MainCover3,
  Options,
  Title,
  Phones,
  VectorL,
  VectorR,
  Text,
  Marks
} from "./styles";
import axios from 'axios';

import { Promo } from "./components/promo";
import { InputSearch } from "./components/inputSearch";
import { TextButton } from "./components/textButton";
import { TextButton2 } from "./components/textButton2";
import { Cover } from "./components/cover";
import { Cover2 } from "./components/cover2";
import { IconButton } from "./components/iconButoon";
import { PhoneButton } from "./components/phoneButton";
import { Mark } from "./components/mark";
import { Footer } from "./components/footer";
import { Modal } from './components/modal';

function App() {
  const [phonesJSON, setPhonesJSON] = useState(["merda2", "merda"]);
  const [openModal, setOpenModal] = useState(false)
  const [modalItem, setModalItem] =useState({})

  useEffect(() => {
    getPhones()
  }, [])

  const url = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

  async function getPhones() {
    const response = await axios.get(url)
    const loadPhones = response.data.products
    setPhone(loadPhones)
  }

  async function setPhone(loadPhones) {
    setPhonesJSON(loadPhones)
  }

  function Mdetails(item){
    setOpenModal(true)
    setModalItem(item)
  }

  return (
    <Main>
      <Main2>
        <Header>
          <Promo image={shieldCheck} text1="Compra" text2=" 100% segura" />
          <Promo image={truck} text1="Frete grátis" text2=" acima de R$ 200" />
          <Promo image={creditCard} text1="Parcele" text2=" suas compras" />
        </Header>

        <SearchHeader>
          <img src={vtex} />
          <InputSearch />
          <img src={box} />
          <img src={heart} />
          <img src={userCircle} />
          <img src={shoppingCart} />
        </SearchHeader>

        <Tabs>
          <TextButton text="Todas Categorias" />
          <TextButton text="Supermercado" />
          <TextButton text="Livros" />
          <TextButton text="Moda" />
          <TextButton text="Lançamentos" />
          <TextButton text="Ofertas do dia" />
          <TextButton text="Assinatura" image={crownSimple} />
        </Tabs>
      </Main2>

      <MainCover>
        <Cover
          image={cover1}
          text1="Venha conhecer nossas promoções"
          text2="50% Off nos produtos"
          textButton="Ver produto"
        />
      </MainCover>

      <Main2>
        <Options>
          <IconButton image={monitorarTablet} text="Tecnologia" />
          <IconButton image={supermercados1} text="Supermercado" />
          <IconButton image={whiskey} text="Bebidas" />
          <IconButton image={ferramentas1} text="Ferramentas" />
          <IconButton image={cuidados} text="Saúde" />
          <IconButton image={corrida1} text="Esportes e Fitness" />
          <IconButton image={moda1} text="Moda" />
        </Options>

        <Title>
          <div />
          <p>Produtos relacionados</p>
          <div />
        </Title>

        <Tabs2>
          <TextButton2 text="celular" />
          <TextButton2 text="acessórios" />
          <TextButton2 text="tablets" />
          <TextButton2 text="NOTEBOOKS" />
          <TextButton2 text="TVs" />
          <TextButton2 text="Ver todos" />
        </Tabs2>
      </Main2>

      <Phones>
        <VectorL src={vectorL} />
        <Main3>
          {
            phonesJSON.map((item) =>
              <PhoneButton
                image={item.photo}
                text1={item.productName}
                text2="R$ 30,90"
                text3="R$ 28,90"
                text4="ou 2x de R$ 49,95 sem juros"
                text5="Frete grátis"
                textButton="Comprar"
                onClick={() => Mdetails(item)}
              />
            )
          }
        </Main3>
        <VectorR src={vectorR} />
      </Phones>

      <Main2>
        <MainCover2>
          <Cover2
            image={image45}
            text1="Parceiros"
            text2="Lorem ipsum dolor sit amet, consectetur"
            textButton="Confira"
          />
          <Cover2
            image={image45}
            text1="Parceiros"
            text2="Lorem ipsum dolor sit amet, consectetur"
            textButton="Confira"
          />
        </MainCover2>
      </Main2>

      <Title>
        <div />
        <p>Produtos relacionados</p>
        <div />
      </Title>
      <Text>Ver todos</Text>

      <Main2>
        <MainCover3>
          <Cover2
            image={image45}
            text1="Produtos"
            text2="Lorem ipsum dolor sit amet, consectetur"
            textButton="Confira"
          />
          <Cover2
            image={image45}
            text1="Produtos"
            text2="Lorem ipsum dolor sit amet, consectetur"
            textButton="Confira"
          />
        </MainCover3>

        <Title>
          <p>Navegue por marcas</p>
        </Title>

        <Marks>
          <Mark image={vtex}/>
          <Mark image={vtex}/>
          <Mark image={vtex}/>
          <Mark image={vtex}/>
          <Mark image={vtex}/>
        </Marks>
      </Main2>

      <Footer />

      <Modal 
        isOpen={openModal} 
        setModalOpen={() => setOpenModal(!openModal)}
        image={modalItem.photo}
        info1={modalItem.productName}
        info2={modalItem.price}
        info3={modalItem.descriptionShort}
      />
    </Main>
  );
}

export default App;
