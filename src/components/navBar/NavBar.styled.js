import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyleWrapper = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: rgba(180, 180, 180, 0.4);
  border-bottom: 2px solid gray;
  box-shadow: 0 0 10px 2px black;
  padding-left: 20px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 15px 0;
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
      bottom: 0%;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 2px;
      background-color: white;
    }
  }
`;
