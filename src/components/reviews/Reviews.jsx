import React, { useEffect, useState } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import styled from 'styled-components';

const Reviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const get = async () => {
      setIsLoading(true);
      try {
        const res = await fetchMovieReviews(id);
        setReviews(res);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    get();
  }, [id]);

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',

          justifyContent: 'center',
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
