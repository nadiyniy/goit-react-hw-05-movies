import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: rgba(180, 180, 180, 0.4);
  padding: 5px;
  border-radius: 10px;
  padding-top: 50px;
  & img {
    width: 500px;
    margin-left: 50px;
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
