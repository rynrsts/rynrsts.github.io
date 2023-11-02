import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import 'views/Home/Home.css';
import { HomeTypography as homeTypography } from 'utilities/data';

const CustomTypography = styled(Typography)({
  color: '#F7F7F7',
  textAlign: 'center',
  letterSpacing: '0.07em',
});

const Home = () => {
  return (
    <div className='home-div'>
      <div className='home-absolute' id='home-absolute'></div>
      <Container
        maxWidth='lg'
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CustomTypography sx={{ fontSize: '1.5rem', letterSpacing: '0.07em' }}>
          {homeTypography.intro}
        </CustomTypography>
        <CustomTypography
          sx={{
            fontSize: '3.5rem',
            letterSpacing: '0.07em',
            marginTop: '32px',
          }}
        >
          {homeTypography.name}
        </CustomTypography>
        <CustomTypography sx={{ marginTop: '24px' }}>
          {homeTypography.bio}
        </CustomTypography>
      </Container>
    </div>
  );
};

export default Home;
