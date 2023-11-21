import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: rgba(180, 180, 180, 0.4);
  padding: 5px;
  border-radius: 10px;
  padding-top: 50px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 500px;
  }
  p {
    margin-bottom: 10px;
    a {
      transition: all 0.3s ease;
      display: inline-flex;
      color: black;
      font-size: 14px;
      padding: 3px 10px;
      border: 1px solid black;
      border-radius: 5px;
      margin-bottom: 10px;
      cursor: pointer;
      text-decoration: none;
      align-items: center;
      &:focus,
      &:hover {
        color: white;
        text-shadow: 0px 0px 5px white;
      }
      &:focus svg,
      &:hover svg {
        /* box-shadow: 0px 0px 5px 1px white; */
        filter: drop-shadow(0px 0px 5px white);
      }
    }
  }
`;
