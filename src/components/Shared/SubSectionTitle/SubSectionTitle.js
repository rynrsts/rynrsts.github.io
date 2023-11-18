import React from 'react';
import { Typography } from '@mui/material';

import { Styles } from 'utilities/constants/constants';

const SubSectionTitle = ({ title, otherStyles }) => {
  const {
    FONT: { BOLD: bold },
    LETTER_SPACING: letterSpacing,
  } = Styles;

  return (
    <Typography
      sx={{
        fontSize: '1.5rem',
        fontWeight: bold,
        letterSpacing: letterSpacing,
        textAlign: 'center',
        ...otherStyles,
      }}
    >
      {title}
    </Typography>
  );
};

export default SubSectionTitle;
