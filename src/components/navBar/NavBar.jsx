import React from 'react';
import { StyleWrapper, StyledLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <nav>
      <StyleWrapper>
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

export default NavBar;
