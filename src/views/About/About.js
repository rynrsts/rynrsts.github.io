import React from 'react';
import { Container, Divider } from '@mui/material';

import {
  SectionTitles as sectionTitles,
  SubSectionTitles as subSectionTitle,
} from 'utilities/data';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import AboutDescription from 'components/AboutDescription/AboutDescription';
import Badges from 'components/Badges/Badges';
import SkillsTable from 'components/SkillsTable/SkillsTable';
import SubSectionTitle from 'components/SubSectionTitle/SubSectionTitle';

const About = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{ padding: '64px 24px', scrollMarginTop: '64px' }}
      id='about'
    >
      <SectionTitle title={sectionTitles.about} />
      <AboutDescription />
      <Badges />
      <Divider sx={{ marginTop: '64px' }} />
      <SubSectionTitle
        title={subSectionTitle.skills}
        otherStyles={{ marginTop: '64px' }}
      />
      <SkillsTable />
    </Container>
  );
};

export default About;
