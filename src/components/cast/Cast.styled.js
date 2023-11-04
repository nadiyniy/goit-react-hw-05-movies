import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  overflow: auto;
  gap: 10px;
  & li {
    & img {
      max-width: 100px;
      height: 150px;
      object-fit: cover;
      border-radius: 10px;
      border: 1px solid white;
      box-shadow: 2px 2px 5px 1px black;
    }
    & div {
      margin-top: 10px;
      background-color: rgba(180, 180, 180, 0.4);
      border-radius: 10px;
      padding: 5px 5px;

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
