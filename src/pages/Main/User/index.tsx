import React, { useContext } from 'react';

import { ReactComponent as ChatIcon } from '@src/assets/chat-icon.svg';
import { ReactComponent as OptionsIcon } from '@src/assets/dots-vert-icon.svg';
import { ReactComponent as MoonIcon } from '@src/assets/moon-icon.svg';

import AppContext from '@src/contexts/AppContext';

import { Container, LeftContainer, RightContainer } from './styles';

const User: React.FC = () => {
  const { setTheme, theme } = useContext(AppContext);

  return (
    <Container>
      <LeftContainer>
        <img
          src="https://picsum.photos/200/300"
          alt="user"
          className="user-image"
        />
      </LeftContainer>

      <RightContainer currentTheme={theme!}>
        <button
          className="toggle-theme-btn"
          type="button"
          onClick={() => setTheme!(theme === 'dark' ? 'main' : 'dark')}
        >
          <MoonIcon />
        </button>

        <button type="button">
          <ChatIcon />
        </button>

        <button type="button">
          <OptionsIcon />
        </button>
      </RightContainer>
    </Container>
  );
};

export default User;
