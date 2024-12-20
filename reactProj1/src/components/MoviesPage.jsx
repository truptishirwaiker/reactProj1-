import React from 'react';
import Carousel from './Carousel/Carousel';
import Header from './Header/Header';
import MovieList from './MovieList';

const MoviesPage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <MovieList />
    </div>
  );
};

export default MoviesPage;
