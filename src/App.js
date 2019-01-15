import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { ThemeProvider } from 'styled-components';
import theme, { appColor, titleColor } from './modules/theme';

const AppWrapper = styled.div`
  display: flex;
  background-color: ${appColor};
  flex-direction: column;
  min-height: 100vh;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
  h3,
  h5 {
    color: ${titleColor};
  }
`;

const Main = styled.main`
  min-height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Main>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React Now
              </a>
            </header>
          </Main>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
