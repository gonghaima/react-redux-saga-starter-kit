import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import theme, { appColor, titleColor } from './modules/theme';
import config from './config';
import GlobalStyles from './components/GlobalStyles';

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
          <Helmet
            defer={false}
            htmlAttributes={{ lang: 'en-AU' }}
            encodeSpecialCharacters={true}
            defaultTitle={config.title}
            titleTemplate={`%s | ${config.name}`}
            titleAttributes={{ itemprop: 'name', lang: 'en-AU' }}
          />
          <Main>
            <header className="App-header">
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
          <GlobalStyles />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
