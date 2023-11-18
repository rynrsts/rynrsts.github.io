import React from 'react';
import { Container } from '@mui/material';

import 'components/Experience/Experience.css';
import { SectionTitles as sectionTitles, Styles } from 'utilities/constants/constants';
import SectionTitle from 'components/Shared/SectionTitle/SectionTitle';
import ExperienceTimeline from 'components/Experience/ExperienceTimeline/ExperienceTimeline';

const Experience = () => {
  const {
    SIZE: { BASE: baseSize, SPACING: spacing },
  } = Styles;

  return (
    <div className='experience-div' id='experience'>
      <Container
        maxWidth='lg'
        sx={{ padding: `${baseSize} ${spacing}`, scrollMarginTop: baseSize }}
        id='about'
      >
        <SectionTitle title={sectionTitles.EXPERIENCE} />
        <ExperienceTimeline />
      </Container>
    </div>
  );
};

export default Experience;
