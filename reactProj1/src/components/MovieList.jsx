import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMovie } from './movieSlice';
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <div>Loading movies...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Movies</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {movies.map((movie) => (
          <li key={movie._id} style={{ marginBottom: '20px' }}>
            <h3>{movie.name}</h3>
            <button
              onClick={() => {
                dispatch(selectMovie(movie));
                navigate(`/latest/${movie._id}`);
              }}
              style={{
                padding: '10px',
                backgroundColor: '#007BFF',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
