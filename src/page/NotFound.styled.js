import styled from 'styled-components';

export const StyledContainer = styled.div`
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
