import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 574px;
  height: 100%;
  position: relative;
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 20px;

`;

export const Gradient = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  opacity: 0.8;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 85.04%);
  position: absolute;
`;

export const Text1 = styled.p`
  color: #FFF;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  position: absolute;
  left: 40px;
  bottom: 176px;
`;

export const Text2 = styled.p`
  width: 181px;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  position: absolute;
  left: 40px;
  bottom: 120px;
`;

export const Button = styled.button`
  width: 131px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background-color: #F71963;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.28px;
  text-transform: uppercase;

  position: absolute;
  left: 40px;
  bottom: 40px;
`;
