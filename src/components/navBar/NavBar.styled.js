import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyleWrapper = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: rgb(211, 211, 211);
  padding: 15px 20px;
  border-bottom: 2px solid gray;
  box-shadow: 0 0 10px 2px black;
`;
export const StyledLink = styled(NavLink)`
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
      bottom: -50%;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 2px;
      background-color: blue;
    }
  }
`;
