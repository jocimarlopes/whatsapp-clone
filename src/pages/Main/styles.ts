import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.main`
  width: 100%;
  max-width: 1380px;
  height: 96%;

  display: flex;
  box-shadow: 0 1px 1px 0 ${props => props.theme.colors.lightBlack},
    0 2px 5px 0 ${props => props.theme.colors.lightBlack};

  @media screen and (max-width: 1400px) {
    height: 100%;
    margin: 0;
  }
`;

export const LeftWrapper = styled.div`
  width: 100%;
  max-width: 420px;

  border-right: 1px solid ${props => props.theme.colors.lightGray};

  display: flex;
  flex-direction: column;
`;

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
