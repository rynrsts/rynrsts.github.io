import React from 'react';
import { Container, Divider } from '@mui/material';

import {
  SectionTitles as sectionTitles,
  SubSectionTitles as subSectionTitle,
} from 'utilities/data';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import EducationTabs from 'components/EducationTabs/EducationTabs';
import CertificationAccordion from 'components/CertificationAccordion/CertificationAccordion';
import SubSectionTitle from 'components/SubSectionTitle/SubSectionTitle';

const Education = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{ padding: '64px 24px', scrollMarginTop: '64px' }}
      id='education'
    >
      <SectionTitle title={sectionTitles.education} />
      <EducationTabs />
      <Divider sx={{ marginTop: '64px' }} />
      <SubSectionTitle
        title={subSectionTitle.certifications}
        otherStyles={{ margin: '64px 0' }}
      />
      <CertificationAccordion />
    </Container>
  );
};

export default Education;
