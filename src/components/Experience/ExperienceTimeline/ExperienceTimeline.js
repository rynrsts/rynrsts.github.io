import React from 'react';
import { Timeline } from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

import 'components/Experience/ExperienceTimeline/ExperienceTimeline.css';
import useWindowWidth from 'utilities/hooks/useWindowWidth';
import { Styles } from 'utilities/constants/constants';
import { Experiences as experiences } from 'utilities/data/experience';
import ExperienceItem from 'components/Experience/ExperienceTimeline/ExperienceItem';

const ExperienceTimeline = () => {
  const {
    SIZE: { MOBILE: mobile, MOBILE_NO_PX: mobileSize },
  } = Styles;

  const width = useWindowWidth();
  const isWidthMoreThanBase = width > mobileSize;

  const showTimelineItem =
    experiences.length > 0 &&
    experiences.map((experience, index) => (
      <ExperienceItem
        index={index}
        isWidthMoreThanBase={isWidthMoreThanBase}
        duration={experience.duration}
        position={experience.position}
        company={experience.company}
        details={experience.details}
        key={index}
      />
    ));

  return (
    <div className='experience-timeline-div'>
      <Timeline
        position={isWidthMoreThanBase ? 'alternate' : null}
        sx={{
          maxWidth: isWidthMoreThanBase ? '100%' : mobile,
          marginTop: Styles.SIZE.BASE,
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
