import Loader from 'components/helpers/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { StyledList } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchMovieCast(id).then(res => {
      setCast(res.cast);
    });
  }, [id]);
  if (!cast) {
    return <Loader />;
  }
  return (
    <StyledList>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            width={100}
            height={100}
            loading="lazy"
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU'
            }
            alt={actor.name}
          />
          <h3>{actor.name}</h3>
          <p>{actor.character}</p>
        </li>
      ))}
    </StyledList>
  );
};

export default Cast;
