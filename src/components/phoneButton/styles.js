import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 270px;
  height: 500px;
  flex-direction: column;
  padding: 0 14px 0 14px;
  margin-top: 17px;
  /* justify-content: left; */
  /* align-items: center; */
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.22);

  button{
    width: 245px;
    height: 44px;
    border: none;
    border-radius: 4px;
    background: #F71963;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 16px;
  }
`;

export const Img = styled.img`
  display: flex;
  width: 247px;
  height: 228px;
  margin-top: 32px;
`;

export const Text1 = styled.span`
  color: #3F3F40;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 18px;
`;

export const Text2 = styled.del`
  color: #808080;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;
`;

export const Text3 = styled.span`
  color: #3F3F40;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 4;
`;

export const Text4 = styled.span`
  color: #3F3F40;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 6px;
`;

export const Text5 = styled.span`
  color: #F71963;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 9px;
`;
