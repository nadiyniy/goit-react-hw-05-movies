import Loader from 'components/helpers/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { StyledList } from './Reviews.styled';

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
    return <Loader />;
  }

  if (!reviews?.results.length) {
    return <p>We don`t have any views for this movie</p>;
  }

  return (
    <StyledList>
      {reviews.results.map(user => (
        <div key={user.id}>
          <h3>Author: {user.author}</h3>
          <li>
            <p>{user.content}</p>
          </li>
        </div>
      ))}
    </StyledList>
  );
};

export default Reviews;
