import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyleWrapper = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.4);
  border-bottom: 2px solid black;

  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;
export const StyledLink = styled(NavLink)`
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
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background-color: white;
    }
  }
`;
