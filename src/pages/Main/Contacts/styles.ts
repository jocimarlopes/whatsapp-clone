import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  flex: 1;

  border-top: 1px solid ${props => props.theme.colors.lightGray};
  background: ${props => lighten(0.07, props.theme.colors.secondary)};

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => lighten(0.07, props.theme.colors.secondary)};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => darken(0.07, props.theme.colors.secondary)};
  }
`;
