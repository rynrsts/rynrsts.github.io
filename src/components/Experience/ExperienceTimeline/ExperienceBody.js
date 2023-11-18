import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import 'components/Experience/ExperienceTimeline/ExperienceBody.css';
import { Styles } from 'utilities/constants/constants';
import CustomChip from 'components/Shared/CustomChip/CustomChip';

const {
  FONT: { BOLD: bold },
  LETTER_SPACING: letterSpacing,
  SIZE: { SPACING: spacing },
} = Styles;

const CustomTypography = styled(Typography)({
  letterSpacing,
  marginTop: '12px',
  textAlign: 'left',
});

const ExperienceBody = ({ duration, position, company, details }) => {
  const showTechnologies = (technologies) =>
    technologies &&
    Object.keys(technologies).map((key) => (
      <CustomChip label={key} color={technologies[key]} key={key} />
    ));

  const showProjects = (projects) =>
    projects.length > 0 &&
    projects.map((project, index) => (
      <div key={index}>
        <CustomTypography>
          <span className='project-company'>{project.company}, </span>
          <span className='project-position'>{project.position}</span>
        </CustomTypography>
        <div className='technologies-div'>
          {showTechnologies(project.technologies)}
        </div>
      </div>
    ));

  const showDetails =
    details.length > 0 &&
    details.map((detail, index) =>
      typeof detail === 'string' ? (
        <CustomTypography key={index}>{detail}</CustomTypography>
      ) : (
        <div key={index} className='projects-div'>
          {showProjects(detail.projects)}
        </div>
      )
    );

  return (
    <Paper elevation={3} sx={{ padding: spacing }}>
      <Typography
        sx={{
          letterSpacing,
          fontWeight: bold,
          textAlign: 'center',
        }}
      >
        {position}
      </Typography>
      <CustomTypography
        color='text.secondary'
        sx={{ fontSize: '0.87rem', textAlign: 'center' }}
      >
        {duration}
      </CustomTypography>
      <CustomTypography sx={{ marginTop: spacing }}>{company}</CustomTypography>
      {showDetails}
    </Paper>
  );
};

export default ExperienceBody;
