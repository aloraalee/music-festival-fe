import './ShowSection.css';

function ShowSection({ artist, location, showTime }) {

  return (
    <section className="show-section">
      <p>{artist}</p>
      <p>{location}</p>
      <p>{showTime}</p>
    </section>
    )}
        
export default ShowSection;