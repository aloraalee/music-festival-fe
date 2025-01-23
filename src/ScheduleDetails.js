import './ScheduleDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import ShowSection from '../src/ShowSection';


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

  const deleteShow = (showID) => {
    fetch(`/api/v1/schedules/${scheduleId}/remove_show/${showID}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
      setSchedule(prevSchedule => ({
        ...prevSchedule,
        included: prevSchedule.included.filter(show => show.id !== showID)
      }));
    })
    
    .catch(error => console.error('Error deleting show:', error));
  };

  return (
    <section className='show-details' >
      <article> 
        <img className="show-img"src="/Logo_Primavera_Sound.webp"alt={`Schedule details for ${schedule.data.attributes.title}`}/>
        <h2>{schedule.data.attributes.title}</h2>
        <h3>{schedule.data.attributes.date}</h3>
        <p>The following are shows for user {schedule.data.attributes.user_id}:</p>
        <div className='show-section'>
        {schedule.included.map((show, index) => {
          return (
            <ShowSection
              key={show.id}
              artist={show.attributes.artist}
              location={show.attributes.location}
              showTime={show.attributes.show_time}
              showId={show.id}
              deleteShow={deleteShow}
            />
          );
        })}
      </div>      
      </article>
    </section>
  );
}



export default ScheduleDetails;