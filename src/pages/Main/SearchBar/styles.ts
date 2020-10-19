import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 50px;

  background: ${props => lighten(0.03, props.theme.colors.secondary)};
`;
