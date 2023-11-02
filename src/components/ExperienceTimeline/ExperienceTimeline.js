import React from 'react';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
} from '@mui/lab';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

import 'components/ExperienceTimeline/ExperienceTimeline.css';
import useWindowWidth from 'utilities/hooks/useWindowWidth';
import { Experiences as experiences } from 'utilities/experience';
import ExperiencePaper from './ExperiencePaper';

const ExperienceTimeline = () => {
  const width = useWindowWidth();
  const isWidthMoreThanBase = width > '768';

  const showTimelineItem =
    experiences.length > 0 &&
    experiences.map((experience, index) => (
      <TimelineItem key={index}>
        <TimelineSeparator>
          {index === 0 ? <TimelineDot color='success' /> : <TimelineDot />}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={!isWidthMoreThanBase ? { paddingRight: 0 } : {}}>
          <ExperiencePaper
            duration={experience.duration}
            position={experience.position}
            company={experience.company}
            details={experience.details}
          />
        </TimelineContent>
      </TimelineItem>
    ));

  return (
    <div className='experience-timeline-div'>
      <Timeline
        position={isWidthMoreThanBase ? 'alternate' : null}
        sx={{
          maxWidth: isWidthMoreThanBase ? '100%' : '768px',
          marginTop: '64px',
          padding: 0,
          [`& .${timelineItemClasses.root}:before`]: !isWidthMoreThanBase
            ? {
                flex: 0,
                padding: 0,
              }
            : {},
        }}
      >
        {showTimelineItem}
      </Timeline>
    </div>
  );
};

export default ExperienceTimeline;
