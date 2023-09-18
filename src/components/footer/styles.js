import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 325px;
  margin-top: 95px;
  background-color: #2A2A2A;
`;

export const Container2 = styled.div`
  display: flex;
  width: 100%;
  height: 325px;
  background-color: #2A2A2A;
  padding-bottom: 20px;
`;

export const Title = styled.p`
    margin-top: 49px;
    margin-bottom: 24px;
    color: #FFF;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const P = styled.p`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
`;

export const F1 = styled.div`
  display: flex;
  width: 146px;
  height: 325px;
  flex-direction: column;
  margin-left: 96px;

  div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 60px;
  }
`;

export const F2 = styled.div`
  display: flex;
  width: 170px;
  height: 325px;
  flex-direction: column;
  margin-left: 93px;
`;

export const F3 = styled.div`
  display: flex;
  width: 166px;
  height: 325px;
  flex-direction: column;
  margin-left: 96px;
`;

export const F4 = styled.div`
  display: flex;
  width: 380px;
  height: 260px;
  border-radius: 10px;
  background: #FFF;
  flex-direction: column;
  margin-top: 49px;
  margin-left: 280px;

  div{
    display: flex;
    justify-content: center;
    margin-top: 31px;
    gap: 9px;
  }

  input{
    width: 230px;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #2A2A2A;
    background: #FFF;
    padding-left: 25px;
  }

  button{
    width: 62px;
    height: 45px;
    border-radius: 4px;
    border: none;
    background: #F71963;
    color: #FFF;
  }
`;

export const P1 = styled.p`
  color: #3F3F40;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px; /* 144.444% */
  text-transform: uppercase;
  margin-left: 29px;
  margin-top: 40px;
`;

export const P2 = styled.p`
  color: #3F3F40;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  text-transform: uppercase;
  margin-left: 29px;
`;

export const P3 = styled.p`
  width: 250px;
  color: #3F3F40;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px; /* 158.333% */
  margin-left: 56px;
  margin-top: 15px;
`;

export const Final = styled.div`
  display: flex;
  width: 100%;
  background-color: #2A2A2A;
  border-top: 1px solid #FFF;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0 22px 0;

  color: #FFF;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px; /* 130% */
  text-transform: uppercase;

  p{
    width: 700px;
    margin-left: 96px;
  }

  img{
    margin-right: 96px;
  }
`;







