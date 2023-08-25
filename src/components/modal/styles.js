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
  
  img{
   width: 247px;
   height: 192.199px;
   margin-top: 56px;
   margin-left: 56px;
  }
`;

export const P1 = styled.div`
  color: #041E50;
   font-size: 12px;
   font-style: normal;
   font-weight: 400;
   line-height: 100%; /* 12px */
   letter-spacing: 0.6px;
`;

export const P2 = styled.div`
`;

export const P3 = styled.div`
`;
