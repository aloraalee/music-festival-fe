import './SchedulePoster.css';
import { Link } from 'react-router-dom';

function SchedulePoster({ title, date, id }) {

  return (
    <section className="schedule-poster">
      <Link to={`/${id}`}>
      {title}
      </Link>
    </section>
        )}
        
export default SchedulePoster;