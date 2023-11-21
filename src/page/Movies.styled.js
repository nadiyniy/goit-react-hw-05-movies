import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 10px;
  transition: all 0.3s ease;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 768.98px) {
    max-width: 1000px;
  }
  position: relative;
  div {
    display: flex;
    display: block;
    margin-bottom: 10px;
    position: relative;

    input {
      background-color: rgba(255, 255, 255, 0.4);
      width: 100%;
      font-size: 20px;
      padding: 5px 10px 5px 40px;
      border: 1px solid black;
      border-radius: 10px;
      font-size: 20px;
    }
    button {
      background-color: transparent;
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      cursor: pointer;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.6s ease;

      &:hover svg {
        filter: drop-shadow(0px 0px 2px white);
        transform: rotate(10deg);
      }
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

export const LinkPoster = styled(Link)`
  @media screen and (min-width: 768px) {
    &:hover::after,
    &:focus::after {
      content: '';
      background: transparent;
      background-image: url(${props =>
        props.cover ? `https://image.tmdb.org/t/p/w500${props.cover}` : null});
      background-size: cover;
      background-position: center;
      width: 340px;
      height: 500px;
      display: block;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      z-index: 1;
    }
  }
`;
