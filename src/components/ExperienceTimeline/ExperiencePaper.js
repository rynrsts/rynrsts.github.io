import React from 'react';
import { Chip, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import 'components/ExperienceTimeline/ExperiencePaper.css';

const CustomTypography = styled(Typography)({
  letterSpacing: '1px',
  marginTop: '12px',
});

const ExperiencePaper = ({ duration, position, company, details }) => {
  return (
    <Paper elevation={3} sx={{ padding: '24px' }}>
      <Typography
        sx={{
          letterSpacing: '1px',
          fontWeight: '600',
          textAlign: 'center',
        }}
      >
        {position}
      </Typography>
      <CustomTypography
        color='text.secondary'
        sx={{ fontSize: '14px', textAlign: 'center' }}
      >
        {duration}
      </CustomTypography>
      <CustomTypography sx={{ marginTop: '24px' }}>{company}</CustomTypography>
      {details.length > 0 &&
        details.map((detail, index) =>
          typeof detail === 'string' ? (
            <CustomTypography key={index}>{detail}</CustomTypography>
          ) : (
            <div key={index} className='projects-div'>
              {detail.projects.length > 0 &&
                detail.projects.map((project, index) => (
                  <div key={index}>
                    <CustomTypography>
                      <span className='project-company'>
                        {project.company},{' '}
                      </span>
                      <span className='project-position'>
                        {project.position}
                      </span>
                    </CustomTypography>
                    <div className='technologies-div'>
                      {project.technologies &&
                        Object.keys(project.technologies).map((key) => (
                          <Chip
                            label={key}
                            color={project.technologies[key]}
                            variant='outlined'
                            sx={{ backgroundColor: '#F7F7F7' }}
                            key={key}
                          />
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
      <CustomTypography></CustomTypography>
    </Paper>
  );
};

export default ExperiencePaper;
