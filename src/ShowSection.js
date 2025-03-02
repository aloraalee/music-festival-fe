function ShowSection({ showId, artist, location, showTime, deleteShow }) {

  return (
    <section className="show-section">
      <p><strong>Artist: {artist}</strong></p>
      <p>Stage: {location}</p>
      <p>Showtime: {showTime}</p>
      <button className="delete-btn" onClick={() => deleteShow(showId)}>Delete show</button>
    </section>
    )}
        
export default ShowSection;