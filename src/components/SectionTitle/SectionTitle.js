import React from 'react';
import { Typography } from '@mui/material';

const SectionTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        fontSize: '2rem',
        fontWeight: '600',
        letterSpacing: '0.07em',
        textAlign: 'center',
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
