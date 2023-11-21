import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import styled from 'styled-components';

import { fetchMovieByQuery } from 'services/api';
import { LinkPoster, StyledWrapper } from './Movies.styled';

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
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSetQuery();
    }
  };

  return (
    <StyledWrapper>
      <div>
        <input
          placeholder="Let's search for a movie"
          onKeyDown={handleKeyPress}
          value={query}
          onChange={handleOnChange}
        />
        <button onClick={handleSetQuery}>
          <Styled size={20} color="white" />
        </button>
      </div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <LinkPoster
              cover={movie.poster_path}
              state={{ from: location }}
              to={`/movies/${movie?.id}`}
            >
              {movie.title}
            </LinkPoster>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};
const Styled = styled(BiSearchAlt2)`
  transition: all 0.3s ease;
`;

export default Movies;
