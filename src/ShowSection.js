import './ShowSection.css';

function ShowSection({ artist, location, showTime }) {

  return (
    <section className="show-section">
      <p>Artist: {artist}</p>
      <p>Stage: {location}</p>
      <p>Showtime: {showTime}</p>
    </section>
    )}
        
export default ShowSection;