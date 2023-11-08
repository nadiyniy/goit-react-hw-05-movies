import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledContainer } from './NotFound.styled';
import notFound from '../image/kisspng.png';
const NotFound = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  return (
    <StyledContainer>
      <p>
        Movie not found <br />
        <Link to={goBackRef.current}> Go Back</Link>
      </p>
      <img src={notFound} alt="404" width={200} height={200} />
    </StyledContainer>
  );
};

export default NotFound;
