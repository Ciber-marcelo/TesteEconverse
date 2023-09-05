import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0,0,0, 0.7);
`;

export const Design = styled.div`
  display: flex;
  position: fixed;
  width: 769px;
  height: 299px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-Color: #fff;
  
  
`;

export const Left = styled.div`
   width: 50%;
   padding-top: 56px;
   padding-left: 56px;
   box-sizing: border-box;

   img{
      width: 247px;
      height: 192.199px;
   }
`;

export const Right = styled.div`
   width: 50%;
`;

export const Exit = styled.div`
   display: flex;
   justify-content: end;
`;


export const X = styled.button`
   width: 20px;
   height: 20px;
   border: none;
   background-color: #FFF;
   margin-top: 17px;
   margin-right: 31px;
`;

export const P1 = styled.p`
   margin-top: 10px;

   color: #041E50;
   font-family: Lato;
   font-size: 20px;
   font-style: normal;
   font-weight: 400;
   line-height: 100%; /* 20px */
   letter-spacing: 1px;
`;

export const P2 = styled.p`
   margin-top: 21px;

   color: #041E50;
   font-family: Lato;
   font-size: 20px;
   font-style: normal;
   font-weight: 900;
   line-height: 100%; /* 20px */
   letter-spacing: 1px;
`;

export const P3 = styled.p`
   margin-top: 15px;

   color: #222;
   font-family: Lato;
   font-size: 10px;
   font-style: normal;
   font-weight: 400;
   line-height: 150.5%; /* 15.05px */
   letter-spacing: 0.5px;
`;

export const P4 = styled.p`
   margin-top: 15px;

   color: #041E50;
   font-family: Lato;
   font-size: 12px;
   font-style: normal;
   font-weight: 400;
   line-height: 100%; /* 12px */
   letter-spacing: 0.6px;
`;

export const Conter = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 110px;
   height: 36px;
   margin-top: 15px;
   border-radius: 4px;
   border: 1px solid #041E50;

   p{
      color: #041E50;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px; /* 100% */
   }

   button {
      border: none;
      background-color: #FFF;
   }
`;

export const Button = styled.button`
   width: 245px;
   height: 44px;
   margin-top: 15px;
   border: none;
   border-radius: 4px;
   background-color: #F71963;

   color: #FFF;
   text-align: center;
   font-family: Poppins;
   font-size: 14px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   text-transform: uppercase;
`;




