import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  return (
    <StyledContainer>
      <p>
        Movie not found <br />
        <Link to={goBackRef.current}> Go Back</Link>
      </p>
      <img
        src="https://pixabay.com/get/gf899867ac3d84700e58251a7685a3e62493f35437b8a521a770525aab900015fefd6a5ac8239dc78c08afe9089414c320f8b65f6605680d0f9ff096565f2b005_1280.jpg"
        alt="404"
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding-top: 50px;
  & img {
    width: 500px;
  }
  & p {
    margin-left: 250px;
    & a {
      font-size: 30px;
      font-weight: bold;
      text-transform: uppercase;
      color: black;
      transition: all 0.3s ease;
      &:hover {
        color: blue;
      }
    }
  }
`;

export default NotFound;
