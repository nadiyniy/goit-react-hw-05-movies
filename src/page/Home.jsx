import Loader from 'components/helpers/Loader';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { LinkPoster, StyledWrapper } from './Home.styled';

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
              <LinkPoster
                cover={movie.poster_path}
                state={{ from: location }}
                to={`/movies/${movie?.id}`}
              >
                {movie.original_title ?? movie.title ?? movie.name}
                {movie.title}
              </LinkPoster>
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
