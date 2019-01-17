import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import theme, { appColor, titleColor } from './modules/theme';
import config from './config';
import GlobalStyles from './components/GlobalStyles';
import { Home } from './routes/Home';
import { NotFound } from './routes/NotFound';

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
      <Router>
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
              <Route path="/" exact component={Home} />
              <Route path="/notFound" component={NotFound} />
            </Main>
            <GlobalStyles />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
