import React, { useEffect, useState } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import styled from 'styled-components';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    fetchMovies()
      .then(res => {
        setMovies(res.results);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <StyledWrapper>
      <StyledTitle>Trending today:</StyledTitle>
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
        <div
          style={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FallingLines
            color="#929292"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      )}
    </StyledWrapper>
  );
};
const StyledTitle = styled.h1`
  /* margin-left: 20px; */
`;

const StyledWrapper = styled.div`
  padding: 15px 20px;
  & ol {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0;
    padding: 0;
    & li {
      & a {
        text-decoration: none;
        color: rgb(0, 0, 0);
        transition: all 0.2s ease;
        &:hover,
        &:focus {
          color: rgba(0, 0, 255, 0.7);
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Home;
