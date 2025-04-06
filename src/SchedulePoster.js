import './SchedulePoster.css';
import { Link } from 'react-router-dom';

function SchedulePoster({ title, date, id }) {

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="schedule-poster">
      <h2>{title} for {formattedDate}</h2>
      <Link to={`/${id}`}>
      <img className="schedule-img"src="/porto.jpg" alt={`Poster of ${title}`}/>
      </Link>
    </section>
        )}
        
export default SchedulePoster;