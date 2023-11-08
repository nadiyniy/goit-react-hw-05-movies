import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  overflow: auto;
  gap: 10px;
  padding: 5px;
  & li {
    & img {
      max-width: 100px;
      height: 150px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0px 0px 5px 0px white;
    }
    & div {
      margin-top: 10px;

      & h3 {
        margin-top: 10px;
        font-size: 14px;
      }
      & p {
        font-size: 14px;
      }
    }
  }
`;
