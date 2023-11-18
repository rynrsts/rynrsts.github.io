import React, { useState } from 'react';
import { Box, Paper, Tab, Tabs } from '@mui/material';

import 'components/Education/EducationTabs/EducationTabs.css';
import { Styles } from 'utilities/constants/constants';
import { Education as education } from 'utilities/data/education';
import EducationTabPanel from './EducationTabPanel';

const EducationTabs = () => {
  const [value, setValue] = useState(0);

  const {
    LETTER_SPACING: letterSpacing,
    SIZE: { SPACING: spacing },
  } = Styles;

  const showEducationTabs = () =>
    education.length > 0 &&
    education.map((value, index) => (
      <Tab
        label={value.level}
        sx={{
          fontSize: '1rem',
          letterSpacing,
          textAlign: 'left',
          textTransform: 'none',
        }}
        key={index}
      />
    ));

  const showPanels =
    education.length > 0 &&
    education.map((data, index) => (
      <EducationTabPanel value={value} data={data} index={index} key={index} />
    ));

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div className='education-div'>
      <Paper elevation={3} sx={{ padding: spacing }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='secondary'
            indicatorColor='secondary'
          >
            {showEducationTabs(value)}
          </Tabs>
        </Box>
        {showPanels}
      </Paper>
    </div>
  );
};

export default EducationTabs;
