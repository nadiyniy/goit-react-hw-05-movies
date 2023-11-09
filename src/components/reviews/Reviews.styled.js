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

      button {
        transition: all 0.3s ease;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        margin-left: auto;
        border: none;
        background-color: transparent;
        cursor: pointer;
        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }
    }
  }
`;
