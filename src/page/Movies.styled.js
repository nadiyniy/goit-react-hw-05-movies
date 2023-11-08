import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 10px;
  transition: all 0.3s ease;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  input {
    background-color: rgba(255, 255, 255, 0.4);

    /* width: 300px; */
    padding: 5px 15px;
    border: 1px solid black;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: 10px;
  }
  button {
    background-color: rgba(255, 255, 255, 0.4);

    padding: 5px 15px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:hover {
      outline: -webkit-focus-ring-color auto 1px;
    }
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 5px;
    li {
      a {
        font-size: 16px;
        color: black;
        text-decoration: none;
        &:hover,
        &:focus {
          color: white;
          text-shadow: 0px 0px 5px white;
        }
      }
    }
  }
`;
