import React from 'react';
import { Avatar, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import 'components/Footer/Footer.css';
import { Styles, FooterText } from 'utilities/constants/constants';
import { Contacts as contacts } from 'utilities/data/contacts';

const {
  COLOR: { LIGHT_COLOR: lightColor },
  LETTER_SPACING: letterSpacing,
  SIZE: { SPACING: spacing },
} = Styles;

const CustomTypography = styled(Typography)({
  color: lightColor,
  textAlign: 'center',
  letterSpacing: letterSpacing,
  marginTop: spacing,
});

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const { ALL_RIGHTS: allRights, LAST_UPDATED_DATE: lastUpdatedDate } =
    FooterText;

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
          backgroundColor: lightColor,
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
        <CustomTypography>
          &copy; {year} {allRights}
        </CustomTypography>
        <CustomTypography sx={{ fontSize: '0.81rem' }}>
          {lastUpdatedDate}
        </CustomTypography>
      </Container>
    </footer>
  );
};

export default Footer;
