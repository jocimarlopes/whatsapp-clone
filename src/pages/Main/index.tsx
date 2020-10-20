import React from 'react';

import User from './User';
import SearchBar from './SearchBar';
import Contacts from './Contacts';

import ChatHeader from './ChatHeader';
import Chat from './Chat';
import ChatControls from './ChatControls';

import { Container, Box, LeftWrapper, RightWrapper } from './styles';

const Main: React.FC = () => (
  <Container>
    <Box>
      <LeftWrapper>
        <User />

        <SearchBar />

        <Contacts />
      </LeftWrapper>

      <RightWrapper>
        <ChatHeader />

        <Chat />

        <ChatControls />
      </RightWrapper>
    </Box>
  </Container>
);

export default Main;
