import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Gradient = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 85.04%);
  position: absolute;
`;

export const Text1 = styled.p`
  width: 650px;
  color: #FFF;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  position: absolute;
  left: 92px;
  top: 52px;
`;

export const Text2 = styled.p`
  color: #FFF;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  position: absolute;
  left: 92px;
  top: 196px;
`;

export const Button = styled.button`
  width: 227px;
  height: 60px;
  border: none;
  border-radius: 5px;
  background-color: #F71963;
  color: #FFF;
  font-size: 12px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  position: absolute;
  left: 92px;
  top: 285px;
`;
