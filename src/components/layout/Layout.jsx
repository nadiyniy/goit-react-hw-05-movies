import NavBar from 'components/navBar/NavBar';
import React, { Suspense } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <StyleMain>
      <NavBar />
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              width: '100vw',
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FallingLines
              color="#929292"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </StyleMain>
  );
};

const StyleMain = styled.main`
  width: 100%;
  height: 100%;
  /* background-color: rgba(211, 211, 211, 0.2); */
`;
