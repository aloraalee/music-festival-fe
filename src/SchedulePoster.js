import './SchedulePoster.css';
import { Link } from 'react-router-dom';

function SchedulePoster({ title, date, id }) {

  return (
    <section className="schedule-poster">
      <h2>{title} for {date}</h2>
      <Link to={`/${id}`}>
      <img className="schedule-img"src="/porto.jpg" alt={`Poster of ${title}`}/>
      </Link>
    </section>
        )}
        
export default SchedulePoster;