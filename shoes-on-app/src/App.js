import React from 'react';
import Router from './Router';
import styled from 'styled-components';

import { GlobalStorage } from './GlobalContext';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  height: 100vh;
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 80vh;
  background-color: white;
  padding: 0 8px;
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
