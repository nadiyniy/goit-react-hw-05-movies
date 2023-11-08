import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
  h3 {
    border-bottom: 2px solid black;
    margin-bottom: 10px;
  }
  li {
    width: 100%;
    max-height: 300px;
    position: relative;
    overflow: auto;

    p {
      padding: 10px;
      margin: 0 auto;
      border: 1px solid;
      border-radius: 10px;
    }
  }
`;
