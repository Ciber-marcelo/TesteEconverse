import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 128px;
  border-radius: 10px;
  background: #F4F4F4;
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.13);
`;

export const Img = styled.img`
  width: 61px;
  height: 61px;
`;

export const Text = styled.span`
  color: #4E4E4E;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
