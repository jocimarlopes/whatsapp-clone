import styled, { keyframes } from 'styled-components';
import { parseToRgb } from 'polished';

import { Themes } from '@hooks/useThemeState';

interface RightContainerProps {
  currentTheme: Themes;
}

const ripple = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(10);
  }
`;

export const Container = styled.div`
  height: 60px;

  background: ${props => props.theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.div`
  padding: 0 8px;

  img {
    width: 40px;
    height: 40px;

    background-size: cover;
    border-radius: 20px;
    border: 1px solid ${props => props.theme.colors.lightGray};
  }
`;

export const RightContainer = styled.div<RightContainerProps>`
  padding: 0 8px;

  flex: 1;
  display: flex;
  justify-content: flex-end;

  button {
    position: relative;

    width: 36px;
    height: 36px;
    margin: 0 12px;

    border-radius: 50%;
    border: 0;
    overflow: hidden;
    cursor: pointer;

    &::after {
      display: none;
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;

      left: 45%;
      top: 45%;

      background: ${props => {
        const { red, green, blue } = parseToRgb(props.theme.colors.gray);

        return `rgba(${red}, ${green}, ${blue}, 0.3)`;
      }};
      border-radius: 50%;
      opacity: 0;

      animation-name: ${ripple};
      animation-duration: 300ms;
    }

    &:focus:not(:active)::after {
      display: block;
    }
  }

  svg {
    width: 22px;
    height: 22px;

    fill: ${props => props.theme.colors.gray};
  }

  .toggle-theme-btn svg {
    fill: ${props =>
      props.currentTheme === 'main'
        ? props.theme.colors.gray
        : props.theme.colors.orange};
  }
`;
