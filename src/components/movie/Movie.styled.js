import styled from 'styled-components';

export const StyledLinkDiv = styled.div`
  padding: 15px;
  padding-bottom: 20px;

  & div {
    display: flex;
    gap: 20px;
    > a {
      text-decoration: none;
      color: black;
      font-weight: bold;
      transition: all 0.3s ease;
      &:focus,
      &:hover {
        color: rgba(0, 0, 255, 0.5);
      }

      &.active {
        color: rgba(0, 0, 255);
        position: relative;
        transition: all 0.3s ease;
        &::after {
          content: '';
          position: absolute;
          bottom: -25%;
          left: 0;
          width: 100%;
          height: 3px;
          border-radius: 2px;
          background-color: blue;
        }
      }
    }
  }
`;
export const StyledWrapper = styled.div`
  padding: 15px 20px;
  > a {
    display: inline-flex;
    color: black;
    padding: 5px 15px;
    text-decoration: none;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 1px black;
    background-color: lightgray;
    transition: all 0.2s ease;
    &:focus,
    &:hover {
      box-shadow: 0px 0px 0px 0px black;
      background-color: white;
      scale: 0.9;
    }
    &:active {
      scale: 0.8;
      box-shadow: inset -1px -1px 5px 1px black;
      background-color: white;
    }
  }
`;
export const StyledContent = styled.div`
  display: flex;
  gap: 30px;
  border-bottom: 2px solid gray;
  padding: 20px 0;
  & img {
    box-shadow: 2px 2px 5px 1px black;
    width: auto;
    height: 350px;
  }
  & div {
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
