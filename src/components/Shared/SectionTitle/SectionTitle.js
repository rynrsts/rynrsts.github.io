import React from 'react';
import { Typography } from '@mui/material';

import { Styles } from 'utilities/constants/constants';

const SectionTitle = ({ title }) => {
  const {
    FONT: { BOLD: bold },
    LETTER_SPACING: letterSpacing,
  } = Styles;

  return (
    <Typography
      sx={{
        fontSize: '2rem',
        fontWeight: bold,
        letterSpacing: letterSpacing,
        textAlign: 'center',
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
