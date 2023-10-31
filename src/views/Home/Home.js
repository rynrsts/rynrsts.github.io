import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import 'views/Home/Home.css';
import { HomeTypography as homeTypography } from 'utilities/data';

const CustomTypography = styled(Typography)({
  color: '#F7F7F7',
  textAlign: 'center',
  letterSpacing: '1px',
});

const Home = () => {
  return (
    <div className='home-div' id='home-div'>
      <Container
        maxWidth='lg'
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CustomTypography sx={{ fontSize: '24px', letterSpacing: '1.2px' }}>
          {homeTypography.intro}
        </CustomTypography>
        <CustomTypography
          sx={{ fontSize: '56px', letterSpacing: '2px', marginTop: '32px' }}
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
