import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 15px 20px;
  & input {
    background-color: rgba(180, 180, 180, 0.4);

    width: 300px;
    padding: 5px 15px;
    border: 1px solid black;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: 10px;
  }
  & button {
    background-color: rgba(180, 180, 180, 0.4);

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
  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 5px;
    & li {
      & a {
        text-decoration: none;
        color: rgb(0, 0, 0);
        background-color: rgba(180, 180, 180, 0.4);
        padding: 5px 10px;
        border-radius: 10px;
        transition: all 0.2s ease;
        &:hover,
        &:focus {
          color: black;
          text-decoration: underline;
          outline: -webkit-focus-ring-color auto 1px;
        }
      }
    }
  }
`;
