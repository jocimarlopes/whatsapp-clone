import React from 'react';

import { ReactComponent as PendingIcon } from '@src/assets/clock-icon.svg';
import { ReactComponent as SentIcon } from '@src/assets/check-icon.svg';
import { ReactComponent as DeliveredIcon } from '@src/assets/double-check-icon.svg';

import { ContactAttributes } from '../contacts';

import { Container, ImageWrapper, ContactInfo, TimeWrapper } from './styles';

interface Props {
  active?: boolean;
  contact: ContactAttributes;
}

type ContactProps = JSX.IntrinsicElements['div'] & Props;

const mapStatusIcons = {
  pending: <PendingIcon />,
  sent: <SentIcon />,
  delivered: <DeliveredIcon />,
  read: <DeliveredIcon />,
};

const Contact: React.FC<ContactProps> = ({ active, contact }) => (
  <Container active={active}>
    <ImageWrapper>
      <img src={contact.profile_picture} alt={contact.name} />
    </ImageWrapper>

    <ContactInfo messageStatus={contact.last_message.status}>
      <h3>{contact.name}</h3>

      <div className="message">
        <span className="status">
          {mapStatusIcons[contact.last_message.status]}
        </span>

        <p>{contact.last_message.content}</p>
      </div>
    </ContactInfo>

    <TimeWrapper>
      <div>{contact.last_message.time}</div>
    </TimeWrapper>
  </Container>
);

export default Contact;
