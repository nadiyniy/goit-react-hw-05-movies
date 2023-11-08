import styled from 'styled-components';

export const StyledLinkDiv = styled.div`
  div {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
    > a {
      display: inline-flex;
  padding: 10px 0;
  color: rgba(0, 0, 0, 1);
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  font-size: 20px;

  &:focus,
  &:hover {
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0px 0px 5px white;
  }
  &.active {
    color: white;
    text-shadow: 0px 0px 5px white;
    &::after {
      content: '';
      box-shadow: 0px 0px 5px 1px white;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background-color: white;
    }
  }
  }
`;

export const StyledWrapper = styled.div`
  padding: 10px;
  transition: all 0.3s ease;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  > a {
    transition: all 0.3s ease;
    display: inline-flex;
    color: black;
    font-size: 16px;
    padding: 5px 15px;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 10px;
    z-index: 1;
    cursor: pointer;
    text-decoration: none;
    &:focus,
    &:hover {
      color: white;
      text-shadow: 0px 0px 5px white;
    }
    &:active {
    }
  }
`;

export const StyledContent = styled.div`
  & {
    img {
      display: block;

      margin: 0 auto;
      margin-top: 10px;
      box-shadow: 0px 0px 5px 2px white;
    }
  }
  div {
    margin-top: 10px;
    h2 {
      font-size: 20px;
      border-bottom: 2px solid black;
    }
  }
`;
