import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Styles } from 'utilities/constants/constants';
import { HomeIntroduction as homeIntroduction } from 'utilities/data/homeIntroduction';

const {
  FONT: { BLACK: black, BOLD: bold },
  LETTER_SPACING: letterSpacing,
  SIZE: { SPACING: spacing },
} = Styles;

const CustomTypography = styled(Typography)({
  color: Styles.COLOR.LIGHT_COLOR,
  textAlign: 'center',
  letterSpacing,
});

const Introduction = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <CustomTypography sx={{ fontSize: '1.5rem', fontWeight: bold }}>
        {homeIntroduction.intro}
      </CustomTypography>
      <CustomTypography
        sx={{
          fontSize: '3.5rem',
          fontWeight: black,
          marginTop: '32px',
        }}
      >
        {homeIntroduction.name}
      </CustomTypography>
      <CustomTypography sx={{ marginTop: spacing }}>
        {homeIntroduction.bio}
      </CustomTypography>
    </Container>
  );
};

export default Introduction;
