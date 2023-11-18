import React from 'react';
import { Container, Divider } from '@mui/material';

import {
  SectionTitles as sectionTitles,
  SubSectionTitles as subSectionTitles,
  Styles
} from 'utilities/constants/constants';
import SectionTitle from 'components/Shared/SectionTitle/SectionTitle';
import AboutDescription from 'components/About/AboutDescription/AboutDescription';
import Badges from 'components/About/Badges/Badges';
import SubSectionTitle from 'components/Shared/SubSectionTitle/SubSectionTitle';
import SkillsTable from 'components/About/SkillsTable/SkillsTable';

const About = () => {
  const {
    SIZE: { BASE: baseSize, SPACING: spacing },
  } = Styles;

  return (
    <Container
      maxWidth='lg'
      sx={{ padding: `${baseSize} ${spacing}`, scrollMarginTop: baseSize }}
      id='about'
    >
      <SectionTitle title={sectionTitles.ABOUT} />
      <AboutDescription />
      <Badges />
      <Divider sx={{ marginTop: baseSize }} />
      <SubSectionTitle
        title={subSectionTitles.SKILLS}
        otherStyles={{ marginTop: baseSize }}
      />
      <SkillsTable />
    </Container>
  );
};

export default About;
