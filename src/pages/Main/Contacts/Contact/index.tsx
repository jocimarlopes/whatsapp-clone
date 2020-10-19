import React from 'react';

import { Container } from './styles';

interface Props {
  active?: boolean;
}

type ContactProps = JSX.IntrinsicElements['div'] & Props;

const Contact: React.FC<ContactProps> = ({ active }) => (
  <Container active={active}>
    <h1>contact</h1>
  </Container>
);

export default Contact;
