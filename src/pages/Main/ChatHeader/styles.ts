import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;

  background: ${props => props.theme.colors.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`;
