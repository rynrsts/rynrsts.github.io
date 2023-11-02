import React from 'react';
import { Typography } from '@mui/material';

const SubSectionTitle = ({ title, otherStyles }) => {
  return (
    <Typography
      sx={{
        fontSize: '1.5rem',
        fontWeight: '600',
        letterSpacing: '0.07em',
        textAlign: 'center',
        ...otherStyles,
      }}
    >
      {title}
    </Typography>
  );
};

export default SubSectionTitle;
