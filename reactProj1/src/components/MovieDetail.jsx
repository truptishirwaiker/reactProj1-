import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetail = () => {
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);

  if (!selectedMovie) return <div>No movie selected</div>;

  const { imageUrl, name, type, language, rate } = selectedMovie;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <img src={imageUrl} alt={name} style={{ width: '100%', height: 'auto' }} />
        <h1>{name}</h1>
      </div>
      <p><strong>type:</strong> {type}</p>
      <p><strong>language:</strong> {language}</p>
      <p><strong>Rating:</strong> {rate}</p>
      <div style={{ position: 'fixed', bottom: '10px', width: '100%', textAlign: 'center' }}>
        <button
          style={{
            padding: '15px 30px',
            backgroundColor: '#007BFF',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
