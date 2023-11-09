import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px 0;

  li {
    width: 100%;
    overflow: hidden;
    margin-bottom: 15px;

    h3 {
      border-bottom: 2px solid black;
      margin-bottom: 10px;
      font-size: 16px;
    }
    p {
      padding: 10px;
      margin: 0 auto;
      border: 1px solid;
      border-radius: 10px;
      font-size: 14px;
    }
  }
`;
export const Btn = styled.button`
  transition: all 0.3s ease;
  display: ${props => {
    return !props.$knopka ? 'inline-flex' : 'block';
  }};
  margin-left: ${props => {
    return props.$knopka ? 'auto' : '0';
  }};
  justify-content: center;
  align-items: center;
  gap: 2px;
  border: none;
  background-color: ${props => {
    return !props.$knopka ? 'transparent' : 'white';
  }};
  border: ${props => {
    return props.$knopka ? '1px solid black' : null;
  }};

  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
