import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import 'components/About/AboutDescription/AboutDescription.css';
import { Styles } from 'utilities/constants/constants';
import { AboutDescription as aboutDescription } from 'utilities/data/aboutDescription';

const {
  LETTER_SPACING: letterSpacing,
  SIZE: { BASE: baseSize, MOBILE: mobile, SPACING: spacing },
} = Styles;

const CustomTypography = styled(Typography)({
  letterSpacing,
  marginTop: spacing,
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
        maxWidth: mobile,
        margin: 'auto',
        marginTop: baseSize,
      }}
    >
      <div className='about-description-div'>{showDescription}</div>
    </Paper>
  );
};

export default AboutDescription;
