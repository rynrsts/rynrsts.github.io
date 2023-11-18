import React from 'react';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';

import ExperienceBody from 'components/Experience/ExperienceTimeline/ExperienceBody';

const ExperienceItem = ({
  index,
  isWidthMoreThanBase,
  duration,
  position,
  company,
  details,
}) => {
  return (
    <TimelineItem key={index}>
      <TimelineSeparator>
        {index === 0 ? <TimelineDot color='success' /> : <TimelineDot />}
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={!isWidthMoreThanBase ? { paddingRight: 0 } : {}}>
        <ExperienceBody
          duration={duration}
          position={position}
          company={company}
          details={details}
        />
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperienceItem;
