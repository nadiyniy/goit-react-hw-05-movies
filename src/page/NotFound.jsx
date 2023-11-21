import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledContainer } from './NotFound.styled';
import notFound from '../image/kisspng.png';
import { BiLeftArrow } from 'react-icons/bi';
const NotFound = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  return (
    <StyledContainer>
      <p>
        <Link to={goBackRef.current}>
          <BiLeftArrow />
          Go back
        </Link>
        <br />
        Sorry, but the movie was not found. Go back or return to the main page.{' '}
      </p>
      <img src={notFound} alt="404" width={200} height={200} />
    </StyledContainer>
  );
};

export default NotFound;
