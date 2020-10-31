import React from 'react';
import Router from './components/Router';
import styled from 'styled-components';

import { GlobalStorage } from './components/GlobalContext';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
  height: 812px;
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;

  height: 90vh;
  background-color: white;
  padding: 0 2rem;
`;

function App() {
  return (
    <div>
      <GlobalStorage>
        <AppContainer>
          <AppWrapper>
            <Router />
          </AppWrapper>
        </AppContainer>
      </GlobalStorage>
    </div>
  );
}

export default App;
