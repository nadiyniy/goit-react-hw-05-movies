import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 15px 20px;
  & ol {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0;
    padding: 0;
    & li {
      & a {
        text-decoration: none;
        color: rgb(0, 0, 0);
        transition: all 0.2s ease;
        &:hover,
        &:focus {
          color: rgba(0, 0, 255, 0.7);
          text-decoration: underline;
        }
      }
    }
  }
`;
