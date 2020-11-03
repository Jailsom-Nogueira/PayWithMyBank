import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
  height: 812px;

  @media (max-width: 414px) {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 90vh;
  background-color: white;
  padding: 0 2rem;

  @media (max-width: 414px) {
    width: 100vw;
    height: 100vh;
    padding: 0.55rem;
    margin: 0;
  }
`;
