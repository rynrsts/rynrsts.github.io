import React from 'react';
import { Typography } from '@mui/material';

const SubSectionTitle = ({ title, otherStyles }) => {
  return (
    <Typography
      sx={{
        fontSize: '24px',
        fontWeight: '600',
        letterSpacing: '1.2px',
        textAlign: 'center',
        ...otherStyles,
      }}
    >
      {title}
    </Typography>
  );
};

export default SubSectionTitle;
