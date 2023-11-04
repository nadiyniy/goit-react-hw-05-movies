import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 15px 20px;
  & ol {
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
