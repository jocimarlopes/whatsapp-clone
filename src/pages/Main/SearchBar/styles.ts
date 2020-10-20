import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 50px;
  padding: 0 16px;

  background: ${props => lighten(0.03, props.theme.colors.secondary)};

  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 35px;
  padding: 0 16px 0 8px;

  background: ${props => lighten(0.2, props.theme.colors.secondary)};
  border-radius: 100px;
  border: 1px solid ${props => props.theme.colors.lightGray};

  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;

    fill: ${props => props.theme.colors.gray};
  }

  input {
    height: 24px;
    padding: 0 8px;

    border: 0;
    background: transparent;

    flex: 1;
  }
`;
