import React, { useEffect, useState } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import styled from 'styled-components';

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchMovieCast(id).then(res => {
      setCast(res.cast);
    });
  }, [id]);
  if (!cast) {
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

const StyledList = styled.ul`
  display: flex;
  overflow: auto;
  gap: 10px;
  & li {
    & img {
      max-width: 100px;
      height: 150px;
      object-fit: cover;
      border-radius: 10px;
      border: 1px solid black;
      box-shadow: 2px 2px 5px 1px black;
    }
    & h3 {
      margin-top: 10px;
      font-size: 14px;
    }
    & p {
      font-size: 14px;
    }
  }
`;
export default Cast;
