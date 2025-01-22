import React, { useEffect } from 'react';
import './ScheduleContainer.css';
import SchedulePoster from '../src/SchedulePoster';

function ScheduleContainer({ schedules }) {
  useEffect(() => {
    console.log('schedules:', schedules);
  }, [schedules]);

  return (
    <section className="schedule-container">
      {schedules.map(schedule => (
          <SchedulePoster
            key={schedule.id}
            title={schedule.attributes.title}
            date={schedule.attributes.date}
            id={schedule.id}
          />
      ))}
    </section>
  )
}

export default ScheduleContainer;