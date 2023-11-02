import React from 'react';
import { Avatar, Container, Typography } from '@mui/material';

import 'views/Footer/Footer.css';
import { Contacts as contacts } from 'utilities/data';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const showAvatarIcons =
    contacts.length > 0 &&
    contacts.map((contact, index) => (
      <Avatar
        alt={contact.alt}
        onClick={() => window.open(contact.link, '_blank')}
        sx={{
          height: '48px',
          width: '48px',
          color: '#303030',
          backgroundColor: '#F7F7F7',
          cursor: 'pointer',
        }}
        key={index}
      >
        <contact.image />
      </Avatar>
    ));

  return (
    <footer>
      <Container maxWidth='lg'>
        <div className='contacts-div'>{showAvatarIcons}</div>
        <Typography
          sx={{
            color: '#F7F7F7',
            textAlign: 'center',
            letterSpacing: '0.07em',
            marginTop: '24px',
          }}
        >
          &copy; {year} Ryan Aristosa. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
