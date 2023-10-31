import React, { useEffect, useRef, useState } from 'react';
import { FallingLines } from 'react-loader-spinner';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import styled from 'styled-components';

const Movie = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');
  console.log(goBackRef);

  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieById(id)
      .then(res => {
        setMovie(res);
        console.log(res);
      })
      .catch(console.error);
  }, [id]);

  if (!movie) {
    return (
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
    );
  }
  return (
    <StyledWrapper>
      <Link to={goBackRef.current}>Go back</Link>
      <StyledContent>
        <img
          width={300}
          height={500}
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU'
          }
          alt={movie.title}
        />
        <div>
          <h2>
            {movie.title}
            <br />({movie?.release_date})
          </h2>
          <p>User score: {(movie.vote_average * 10).toFixed(2)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </div>
      </StyledContent>
      <StyledLinkDiv>
        <p>Additional information:</p>
        <div>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </div>
      </StyledLinkDiv>
      <Outlet />
    </StyledWrapper>
  );
};
const StyledLinkDiv = styled.div`
  padding: 15px;
  padding-bottom: 20px;

  & div {
    display: flex;
    gap: 20px;
    > a {
      text-decoration: none;
      color: black;
      font-weight: bold;
      transition: all 0.3s ease;
      &:focus,
      &:hover {
        color: rgba(0, 0, 255, 0.5);
      }

      &.active {
        color: rgba(0, 0, 255);
        position: relative;
        transition: all 0.3s ease;
        &::after {
          content: '';
          position: absolute;
          bottom: -25%;
          left: 0;
          width: 100%;
          height: 3px;
          border-radius: 2px;
          background-color: blue;
        }
      }
    }
  }
`;
const StyledWrapper = styled.div`
  padding: 15px 20px;
  > a {
    display: inline-flex;
    color: black;
    padding: 5px 15px;
    text-decoration: none;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 1px black;
    background-color: lightgray;
    transition: all 0.2s ease;
    &:focus,
    &:hover {
      box-shadow: 0px 0px 0px 0px black;
      background-color: white;
      scale: 0.9;
    }
  }
`;
const StyledContent = styled.div`
  display: flex;
  gap: 30px;
  border-bottom: 2px solid gray;
  padding: 20px 0;
  & img {
    box-shadow: 2px 2px 5px 1px black;
    width: auto;
    height: 500px;
  }
  & div {
    /* flex: 1; */
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default Movie;
