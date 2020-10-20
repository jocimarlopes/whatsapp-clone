import React from 'react';

import contacts from './contacts';

import Contact from './Contact';
import { Container } from './styles';

const Contacts: React.FC = () => (
  <Container>
    {contacts.map(contact => (
      <Contact contact={contact} />
    ))}
  </Container>
);

export default Contacts;
