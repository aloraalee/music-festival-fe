import './ShowSection.css';


function ShowSection({ showId, artist, location, showTime, deleteShow }) {

  const formattedTime = new Date(showTime).toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  return (
    <section className="show-card">
      <p><strong>Artist: {artist}</strong></p>
      <p>Stage: {location}</p>
      <p>Showtime: {formattedTime}</p>
      <button className="delete-btn" onClick={() => deleteShow(showId)}>Delete show</button>
    </section>
    )}
        
export default ShowSection;