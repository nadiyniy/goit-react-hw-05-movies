import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/api';
import styled from 'styled-components';

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

const StyledWrapper = styled.div`
  padding: 15px 20px;
  & input {
    width: 300px;
    padding: 5px 15px;
    border: 1px solid black;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & button {
    padding: 5px 15px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default Movies;
