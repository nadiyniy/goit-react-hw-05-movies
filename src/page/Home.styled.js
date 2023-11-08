import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 5px 10px;
  transition: all 0.3s ease;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 20px;
  }
  ol {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
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
