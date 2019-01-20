import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import theme from './modules/theme';
import config from './config';
import GlobalStyles from './components/GlobalStyles';
import { Home } from './routes/Home';
import { NotFound } from './routes/NotFound';
import { AppWrapper, Main } from './modules/styled/App';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/notFound" component={NotFound} />
              </Switch>
            </Main>
            <GlobalStyles />
          </AppWrapper>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
