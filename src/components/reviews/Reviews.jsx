import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import styled from 'styled-components';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetchMovieReviews(id).then(res => {
      setReviews(res);
    });
  }, [id]);

  if (!reviews?.results.length) {
    return <p>We don`t have any views for this movie</p>;
  }
  return (
    <StyledList>
      {reviews.results.map(user => (
        <li key={user.id}>
          <h3>Author: {user.author}</h3>
          <p>{user.content}</p>
        </li>
      ))}
    </StyledList>
  );
};
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;

  & li {
    /* width: 800px; */
    width: 100%;
    height: auto;
    border: 1px solid black;
    border-radius: 10px;
    padding: 15px 20px;
    box-shadow: 0 0 10px 2px black;
    /* margin: 0 10px; */
    & h3 {
      border-bottom: 2px solid black;
      margin-bottom: 15px;
    }
  }
`;
export default Reviews;
