import React from 'react';
import { StyleWrapper, StyledLink } from './NavBar.styled';
import { BiSolidCameraMovie } from 'react-icons/bi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <StyleWrapper>
        <li>
          <Link to="/">
            <Styled size={40} color="white" />
          </Link>
        </li>
        <li>
          <StyledLink to={'/'}>Home</StyledLink>
        </li>
        <li>
          <StyledLink to={'/movies'}>Movies</StyledLink>
        </li>
      </StyleWrapper>
    </nav>
  );
};
const Styled = styled(BiSolidCameraMovie)`
  transition: all 0.3s ease;
`;

export default NavBar;
