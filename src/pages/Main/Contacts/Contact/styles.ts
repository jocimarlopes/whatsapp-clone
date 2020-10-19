import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

interface ContainerProps {
  active?: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 72px;

  background: ${props => lighten(0.07, props.theme.colors.secondary)};
  cursor: pointer;

  flex: 1;

  ${props =>
    props.active &&
    css`
      background: ${darken(0.01, props.theme.colors.secondary)};
    `};
`;
