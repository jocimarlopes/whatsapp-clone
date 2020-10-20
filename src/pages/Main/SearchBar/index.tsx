import React from 'react';

import { ReactComponent as MagnifierIcon } from '@src/assets/magnifier-icon.svg';

import { Container, InputContainer } from './styles';

const SearchBar: React.FC = () => (
  <Container>
    <InputContainer>
      <MagnifierIcon />

      <input type="text" placeholder="Procurar ou começar uma nova conversa" />
    </InputContainer>
  </Container>
);

export default SearchBar;
