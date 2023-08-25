import styled from 'styled-components';

export const Main = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
`;

export const Main2 = styled.div`
   display: flex;
   justify-content: center;
   padding: 0 86px;
   flex-direction: column;
`;

export const Header = styled.div`
   display: flex;
   width: 100%;
   height: 32px;
   justify-content: space-evenly;
   border-bottom: 1px solid #F0F0F0;
`;

export const SearchHeader = styled.div`
   display: flex;
   width: 100%;
   height: 72px;
   justify-content: space-evenly;
   align-items: center;
   border-bottom: 1px solid #F0F0F0;
`;

export const Tabs = styled.div`
   display: flex;
   width: 100%;
   height: 40px;
   justify-content: space-evenly;
   align-items: center;
   box-shadow: 0px 8px 16px 0px rgba(57, 48, 19, 0.12);

   :active button{
      color: #F71963;
   }
`;

export const MainCover = styled.div`
   display: flex;
   width: 100%;
   height: 395px;

   :active button{
      background-color: #F71930;
   }
`;

export const Options = styled.div`
   display: flex;
   width: 100%;
   height: 174px;
   margin-top: 34px;
   justify-content: space-around;
`;

export const Title = styled.div`
   display: flex;
   width: 100%;
   height: 45px;
   margin-top: 39px;
   justify-content: space-evenly;

   p{
      color: #F71963;
      font-family: Poppins;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
   }

   div{
      width: 360px;
      height: 20px;
      border-bottom: 1px solid #DEDEDE;
   }
`;

export const Tabs2 = styled.div`
   display: flex;
   width: 100%;
   height: 40px;
   justify-content: center;
   align-items: center;

   :active button{
      color: #F71963;
   }
`;

export const Phones = styled.div`
   display: flex;
   width: 100%;
   height: 535px;
`;

export const Main3 = styled.div`
   overflow-x: auto;
   display: flex;
   gap: 62px;

   ::-webkit-scrollbar {
      width: 124px;
   }
`;

export const VectorL = styled.img`
      width: 20px;
      height: 34px;
      margin: 216px 40px 0 26px;
`;

export const VectorR = styled.img`
      width: 20px;
      height: 34px;
      margin: 216px 26px 0 40px;
`;

export const MainCover2 = styled.div`
   display: flex;
   width: 100%;
   height: 350px;
   justify-content: space-between;
   margin-top: 71px;

   :active button{
      background-color: #F71930;
   }
`;

export const Text = styled.p`
   display: flex;
   justify-content: center;

   color: #3F3F40;
   font-size: 15px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
`;

export const MainCover3 = styled.div`
   display: flex;
   width: 100%;
   height: 284px;
   justify-content: space-between;
   margin-top: 71px;

   :active button{
      background-color: #F71930;
   }
`;

export const Marks = styled.div`
   display: flex;
   width: 100%;
   height: 211px;
   justify-content: space-between;
   margin-top: 52px;
`;

