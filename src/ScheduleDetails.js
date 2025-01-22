import './ScheduleDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

function ScheduleDetails() {
  const scheduleId = useParams().id
  const [schedule, setSchedule] = useState(null) 

  useEffect(() => {
    fetch(`/api/v1/schedules/${scheduleId}`)
    .then(response => response.json())
    .then(data => {
      setSchedule(data)
      console.log('individual schedule data', data)
    })
    .catch(error => {
      console.error('Error fetching schedule details:', error)
      setSchedule({error: true})
    })
    }, [scheduleId])

  if (!schedule) {
    return <p>Loading...</p>
  }

  if(schedule.error) {
    return <h2>404 - Page or Schedule Not Found</h2>
  }

  return (
    <section className='schedule-details' >
      <article> 
        <img src="/Logo_Primavera_Sound.webp.jpg"alt={`Schedule details for ${schedule.data.attributes.title}`}/>
        <h2>{schedule.data.attributes.title}</h2>
        <p>{schedule.data.attributes.date}</p>  
      </article>
    </section>
  );
}



export default ScheduleDetails;