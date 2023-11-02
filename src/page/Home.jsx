import Loader from 'components/helpers/Loader';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { StyledWrapper } from './Movies.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    fetchMovies()
      .then(res => {
        setMovies(res.results);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [setError]);

  return (
    <StyledWrapper>
      <h1>Trending today:</h1>
      {movies ? (
        <ol>
          {movies?.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie?.id}`}>
                {movie.original_title ?? movie.title ?? movie.name}
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <Loader />
      )}
    </StyledWrapper>
  );
};

export default Home;
