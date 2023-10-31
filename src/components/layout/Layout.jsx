import NavBar from 'components/navBar/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <StyleMain>
      <NavBar />
      <Outlet />
    </StyleMain>
  );
};

const StyleMain = styled.main`
  width: 100%;
  height: 100%;
  /* background-color: rgba(211, 211, 211, 0.2); */
`;
