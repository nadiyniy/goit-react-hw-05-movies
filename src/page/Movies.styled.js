import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 15px 20px;
  & input {
    width: 300px;
    padding: 5px 15px;
    border: 1px solid black;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & button {
    padding: 5px 15px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
