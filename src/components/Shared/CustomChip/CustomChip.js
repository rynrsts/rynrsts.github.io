import React from 'react';
import { Chip } from '@mui/material';

import { Styles } from 'utilities/constants/constants';

const CustomChip = ({ label, color, otherStyles }) => {
  return (
    <Chip
      label={label}
      variant='outlined'
      color={color}
      sx={{
        backgroundColor: Styles.COLOR.LIGHT_COLOR,
        ...otherStyles,
      }}
    />
  );
};

export default CustomChip;
