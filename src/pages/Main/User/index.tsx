import React from 'react';

import { ReactComponent as ChatIcon } from '@src/assets/chat-icon.svg';
import { ReactComponent as OptionsIcon } from '@src/assets/dots-vert-icon.svg';

import { Container, LeftContainer, RightContainer } from './styles';

const User: React.FC = () => (
  <Container>
    <LeftContainer>
      <img
        src="https://picsum.photos/200/300"
        alt="user"
        className="user-image"
      />
    </LeftContainer>

    <RightContainer>
      <button>
        <ChatIcon />
      </button>

      <button>
        <OptionsIcon />
      </button>
    </RightContainer>
  </Container>
);

export default User;
