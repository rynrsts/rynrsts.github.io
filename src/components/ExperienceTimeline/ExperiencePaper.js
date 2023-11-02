import React from 'react';
import { Chip, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import 'components/ExperienceTimeline/ExperiencePaper.css';

const CustomTypography = styled(Typography)({
  letterSpacing: '0.07em',
  marginTop: '12px',
  textAlign: 'left',
});

const ExperiencePaper = ({ duration, position, company, details }) => {
  const showTechnologies = (technologies) =>
    technologies &&
    Object.keys(technologies).map((key) => (
      <Chip
        label={key}
        color={technologies[key]}
        variant='outlined'
        sx={{ backgroundColor: '#F7F7F7' }}
        key={key}
      />
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
    <Paper elevation={3} sx={{ padding: '24px' }}>
      <Typography
        sx={{
          letterSpacing: '0.07em',
          fontWeight: '600',
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
      <CustomTypography sx={{ marginTop: '24px' }}>{company}</CustomTypography>
      {showDetails}
      <CustomTypography></CustomTypography>
    </Paper>
  );
};

export default ExperiencePaper;
