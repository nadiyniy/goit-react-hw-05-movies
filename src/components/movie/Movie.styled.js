import styled from 'styled-components';

export const StyledLinkDiv = styled.div`
  margin-top: 10px;
  background-color: rgba(180, 180, 180, 0.4);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 15px;

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
        color: white;
      }

      &.active {
        color: white;
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
          background-color: white;
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
    background-color: rgba(180, 180, 180, 0.4);
    transition: all 0.2s ease;
    &:focus,
    &:hover {
      box-shadow: 0px 0px 0px 0px black;
      scale: 0.9;
    }
    &:active {
      scale: 0.8;
      box-shadow: inset -1px -1px 5px 1px black;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;
export const StyledContent = styled.div`
  display: flex;
  gap: 30px;
  border-bottom: 2px solid gray;

  & img {
    box-shadow: 2px 2px 5px 1px black;
    width: auto;
    height: 350px;
  }
  & div {
    margin-bottom: 10px;
    background-color: rgba(180, 180, 180, 0.4);
    padding: 5px;
    border-radius: 10px;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
