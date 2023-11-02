import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;

  & li {
    /* width: 800px; */
    width: 100%;
    height: auto;
    border: 1px solid black;
    border-radius: 10px;
    padding: 15px 20px;
    box-shadow: 0 0 10px 2px black;
    /* margin: 0 10px; */
    & h3 {
      border-bottom: 2px solid black;
      margin-bottom: 15px;
    }
  }
`;
