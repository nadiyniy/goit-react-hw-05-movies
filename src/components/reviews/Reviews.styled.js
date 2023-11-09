import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px 0;

  li {
    width: 100%;
    overflow: hidden;
    margin-bottom: 15px;
    /* position: relative; */

    /* max-height: ${({ expanded }) => (expanded ? '100%' : '200px')}; */

    h3 {
      border-bottom: 2px solid black;
      margin-bottom: 10px;
    }
    p {
      padding: 10px;
      margin: 0 auto;
      border: 1px solid;
      border-radius: 10px;

      button {
        /* position: absolute;
        right: 0;
        bottom: 0; */
      }
    }
  }
`;
