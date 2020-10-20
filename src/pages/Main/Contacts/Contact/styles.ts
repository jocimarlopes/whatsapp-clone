import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

interface ContainerProps {
  active?: boolean;
}

interface ContactInfoProps {
  messageStatus: 'pending' | 'sent' | 'delivered' | 'read';
}

export const Container = styled.div<ContainerProps>`
  height: 80px;
  padding: 0 8px 0 0;

  background: ${props => lighten(0.07, props.theme.colors.secondary)};
  cursor: pointer;

  flex: 1;
  display: flex;

  ${props =>
    props.active &&
    css`
      background: ${darken(0.01, props.theme.colors.secondary)};
    `};
`;

export const ImageWrapper = styled.div`
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }
`;

export const ContactInfo = styled.div<ContactInfoProps>`
  padding-left: 4px;
  border-bottom: 0.5px solid ${props => props.theme.colors.lightGray};

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 16px;
    font-weight: normal;
  }

  .message {
    margin-top: 4px;
    display: flex;
    align-items: center;

    span {
      display: flex;
      margin-right: 4px;

      svg {
        width: 16px;
        height: 16px;

        fill: ${props =>
          props.messageStatus === 'read'
            ? lighten(0.15, props.theme.colors.blue)
            : props.theme.colors.darkGray};
      }
    }

    p,
    span {
      font-size: 12px;
      color: ${props => props.theme.colors.darkGray};
    }
  }
`;

export const TimeWrapper = styled.div`
  border-bottom: 0.5px solid ${props => props.theme.colors.lightGray};

  font-size: 13px;
  color: ${props => props.theme.colors.gray};

  div {
    margin-top: 20px;
  }
`;
