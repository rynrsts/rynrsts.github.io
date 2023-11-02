import React from 'react';
import { Avatar, Container, Tooltip } from '@mui/material';

import { Badges as badges } from 'utilities/about';

const Badges = () => {
  const showBadges =
    badges.length > 0 &&
    badges.map((badge, index) => (
      <Tooltip title='Show Credential' key={index}>
        <Avatar
          alt={badge.alt}
          src={badge.image}
          sx={{ height: '136px', width: '136px', cursor: 'pointer' }}
          onClick={() => window.open(badge.link, '_blank')}
        />
      </Tooltip>
    ));

  return (
    <Container
      maxWidth='md'
      sx={{
        marginTop: '64px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      {showBadges}
    </Container>
  );
};

export default Badges;
