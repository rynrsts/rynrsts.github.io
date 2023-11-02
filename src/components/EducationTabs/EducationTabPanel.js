import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTypography = styled(Typography)({
  letterSpacing: '0.07em',
  marginTop: '12px',
});

const EducationTabPanel = ({ value, data, index }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      key={index}
      className='education-tab-panel'
    >
      <CustomTypography
        sx={{ textAlign: 'center', fontWeight: '600', marginTop: '0' }}
      >
        {data.course}
      </CustomTypography>
      <CustomTypography
        color='text.secondary'
        sx={{ fontSize: '0.87rem', textAlign: 'center' }}
      >
        {data.duration}
      </CustomTypography>
      <CustomTypography sx={{ marginTop: '24px' }}>
        {data.school}
      </CustomTypography>
      {data.details.length > 0 &&
        data.details.map((detail, index) => (
          <CustomTypography key={index}>{detail}</CustomTypography>
        ))}
    </div>
  );
};

export default EducationTabPanel;
