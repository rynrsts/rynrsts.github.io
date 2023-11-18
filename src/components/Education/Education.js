import React from 'react';
import { Container, Divider } from '@mui/material';

import {
  SectionTitles as sectionTitles,
  SubSectionTitles as subSectionTitles,
  Styles,
} from 'utilities/constants/constants';
import SectionTitle from 'components/Shared/SectionTitle/SectionTitle';
import EducationTabs from 'components/Education/EducationTabs/EducationTabs';
import SubSectionTitle from 'components/Shared/SubSectionTitle/SubSectionTitle';
import CertificationAccordion from 'components/Education/CertificationAccordion/CertificationAccordion';

const Education = () => {
  const {
    SIZE: { BASE: baseSize, SPACING: spacing },
  } = Styles;

  return (
    <Container
      maxWidth='lg'
      sx={{ padding: `${baseSize} ${spacing}`, scrollMarginTop: baseSize }}
      id='education'
    >
      <SectionTitle title={sectionTitles.EDUCATION} />
      <EducationTabs />
      <Divider sx={{ marginTop: baseSize }} />
      <SubSectionTitle
        title={subSectionTitles.CERTIFICATIONS}
        otherStyles={{ margin: `${baseSize} 0` }}
      />
      <CertificationAccordion />
    </Container>
  );
};

export default Education;
