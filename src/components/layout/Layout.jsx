import Loader from 'components/helpers/Loader';
import NavBar from 'components/navBar/NavBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <StyleMain>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyleMain>
  );
};

const StyleMain = styled.main``;
