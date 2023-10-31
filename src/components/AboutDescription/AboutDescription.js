import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { AboutDescription as aboutDescription } from 'utilities/about';

const CustomTypography = styled(Typography)({
  letterSpacing: '1px',
  marginTop: '24px',
});

const AboutDescription = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: '768px',
        padding: '24px',
        margin: 'auto',
        marginTop: '64px',
      }}
    >
      <CustomTypography sx={{ marginTop: '0' }}>
        {aboutDescription[0]}
      </CustomTypography>
      <CustomTypography>{aboutDescription[1]}</CustomTypography>
      <CustomTypography>{aboutDescription[2]}</CustomTypography>
    </Paper>
  );
};

export default AboutDescription;
