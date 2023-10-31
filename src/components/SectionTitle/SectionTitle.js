import React from 'react';
import { Typography } from '@mui/material';

const SectionTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        fontSize: '32px',
        fontWeight: '600',
        letterSpacing: '1.4px',
        textAlign: 'center',
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
