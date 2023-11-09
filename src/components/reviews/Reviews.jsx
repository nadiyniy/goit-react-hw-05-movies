import Loader from 'components/helpers/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { StyledList } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  // const [expanded, setExpanded] = useState(false);
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

  // const toggleExpand = () => {
  //   setExpanded(!expanded);
  // };

  if (isLoading) {
    return <Loader />;
  }

  if (!reviews?.results.length) {
    return <p>We don`t have any views for this movie</p>;
  }

  return (
    <StyledList
    // expanded={expanded}
    >
      {reviews.results.map(user => (
        <li key={user.id}>
          <h3>Author: {user.author}</h3>
          <p>
            {user.content}
            {/* {user.content.length > 100 ? (
              <button onClick={toggleExpand}>
                {expanded ? 'Hide' : 'Read More'}
              </button>
            ) : null} */}
          </p>
        </li>
      ))}
    </StyledList>
  );
};

export default Reviews;
