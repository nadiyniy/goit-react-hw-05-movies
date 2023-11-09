import Loader from 'components/helpers/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { StyledList } from './Reviews.styled';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styled from 'styled-components';

const Reviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState([]);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const get = async () => {
      setIsLoading(true);
      try {
        const res = await fetchMovieReviews(id);
        setReviews(res);
        setExpandedReviews(Array(res?.results.length).fill(false));
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    get();
  }, [id]);

  const toggleExpand = index => {
    setExpandedReviews(prev => {
      const updateArray = [...prev];
      updateArray[index] = !updateArray[index];
      return updateArray;
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!reviews?.results.length) {
    return <p>We don`t have any views for this movie</p>;
  }

  return (
    <StyledList>
      {reviews.results.map((user, index) => (
        <li key={user.id}>
          <h3>Author: {user.author}</h3>
          <p>
            {user.content.length > 300 && !expandedReviews[index]
              ? `${user.content.slice(0, 300)}`
              : user.content}
            {user.content.length > 300 ? (
              <button onClick={() => toggleExpand(index)}>
                {expandedReviews[index] ? 'Hide' : '. . . read more'}
                <Styled $rotated={expandedReviews[index]} />
              </button>
            ) : null}
          </p>
        </li>
      ))}
    </StyledList>
  );
};
const Styled = styled(AiOutlineArrowUp)`
  transition: all 0.3s ease;
  transform: ${({ rotated }) =>
    !rotated ? 'rotate(-180deg)' : 'rotate(0deg)'};
`;

export default Reviews;
