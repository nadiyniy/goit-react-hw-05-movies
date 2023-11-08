import Loader from 'components/helpers/Loader';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import { StyledContent, StyledLinkDiv, StyledWrapper } from './Movie.styled';

const Movie = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovieById(id)
      .then(res => {
        setMovie(res);
      })
      .catch(err => {
        navigate('/404');
        setError(err.message);
      });
  }, [id, navigate]);

  if (!movie) {
    return <Loader />;
  }
  if (error) {
  }
  return (
    <StyledWrapper>
      <Link to={goBackRef.current}>Go back</Link>
      <StyledContent>
        <img
          width={200}
          height={350}
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU'
          }
          alt={movie.title}
        />
        <div>
          <h2>
            {movie.title} ({movie?.release_date})
          </h2>
          <p>User score: {(movie.vote_average * 10).toFixed(2)}%</p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h4>Genres:</h4>
          <p>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </StyledContent>
      <StyledLinkDiv>
        <h4>Additional information:</h4>
        <div>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </div>
      </StyledLinkDiv>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledWrapper>
  );
};

export default Movie;
