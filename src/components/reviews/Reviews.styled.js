import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 0px 20px;

  & li {
    width: 100%;
    height: auto;
    border-radius: 10px;
    padding: 15px 20px;
    background-color: rgba(180, 180, 180, 0.4);
    border-radius: 10px;
    & h3 {
      border-bottom: 2px solid black;
      margin-bottom: 15px;
    }
  }
`;
