import React from 'react';
import { Container } from '@mui/material';

import 'views/Experience/Experience.css';
import { SectionTitles as sectionTitles } from 'utilities/data';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import ExperienceTimeline from 'components/ExperienceTimeline/ExperienceTimeline';

const Experience = () => {
  return (
    <div className='experience-div' id='experience'>
      <Container
        maxWidth='lg'
        sx={{ padding: '64px 24px', scrollMarginTop: '64px' }}
        id='about'
      >
        <SectionTitle title={sectionTitles.experience} />
        <ExperienceTimeline />
      </Container>
    </div>
  );
};

export default Experience;
