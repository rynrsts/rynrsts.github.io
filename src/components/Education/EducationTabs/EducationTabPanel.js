import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Styles } from 'utilities/constants/constants';

const {
  LETTER_SPACING: letterSpacing,
  FONT: { BOLD: bold },
  SIZE: { SPACING: spacing },
} = Styles;

const CustomTypography = styled(Typography)({
  letterSpacing,
  marginTop: '12px',
});

const EducationTabPanel = ({ value, data, index }) => {
  const showDetails =
    data.details.length > 0 &&
    data.details.map((detail, index) => (
      <CustomTypography key={index}>
        {typeof detail === 'object' ? (
          <>
            <span style={{ fontWeight: 'bold' }}>{detail.prop}: </span>
            <span>{detail.value}</span>
          </>
        ) : (
          detail
        )}
      </CustomTypography>
    ));

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      key={index}
      className='education-tab-panel'
    >
      <CustomTypography
        sx={{ textAlign: 'center', fontWeight: bold, marginTop: 0 }}
      >
        {data.course}
      </CustomTypography>
      <CustomTypography
        color='text.secondary'
        sx={{ fontSize: '0.87rem', textAlign: 'center' }}
      >
        {data.duration}
      </CustomTypography>
      <CustomTypography sx={{ marginTop: spacing }}>
        {data.school}
      </CustomTypography>
      {showDetails}
    </div>
  );
};

export default EducationTabPanel;
