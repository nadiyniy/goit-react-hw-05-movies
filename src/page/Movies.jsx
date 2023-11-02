import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/api';
import { StyledWrapper } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearch] = useSearchParams();
  const queryValue = searchParams.get('query') || '';
  const location = useLocation();

  useEffect(() => {
    fetchMovieByQuery(queryValue).then(res => {
      setMovies(res.results);
    });
  }, [queryValue]);

  const handleOnChange = e => {
    setQuery(e.target.value);
  };

  const handleSetQuery = () => {
    setSearch(query ? { query } : {});
  };

  return (
    <StyledWrapper>
      <input value={query} onChange={handleOnChange} />
      <button onClick={handleSetQuery}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie?.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default Movies;
