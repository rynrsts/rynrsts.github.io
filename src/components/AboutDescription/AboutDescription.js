import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import 'components/AboutDescription/AboutDescription.css';
import { AboutDescription as aboutDescription } from 'utilities/about';

const CustomTypography = styled(Typography)({
  letterSpacing: '0.07em',
  marginTop: '24px',
});

const AboutDescription = () => {
  const showDescription =
    aboutDescription.length > 0 &&
    aboutDescription.map((description, index) =>
      index === 0 ? (
        <CustomTypography sx={{ marginTop: 0 }} key={index}>
          {description}
        </CustomTypography>
      ) : (
        <CustomTypography key={index}>{description}</CustomTypography>
      )
    );

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: '768px',
        margin: 'auto',
        marginTop: '64px',
      }}
    >
      <div className='about-description-div'>{showDescription}</div>
    </Paper>
  );
};

export default AboutDescription;
