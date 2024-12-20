

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MovieDetail from './components/MovieDetail';
import MoviesPage from './components/MoviesPage';

const App = () => {
  return (
    <Router>
      <div style={{ position: 'sticky', top: 0, backgroundColor: '#FFF', padding: '10px', borderBottom: '1px solid #DDD' }}>
        <h2 style={{ margin: 0 }}>Movie Booking App</h2>
      </div>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/latest/:_id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
