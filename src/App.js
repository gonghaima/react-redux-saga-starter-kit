import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import theme from './modules/theme';
import config from './config';
import GlobalStyles from './components/GlobalStyles';
import { store } from './store/index';
import { Home } from './routes/Home';
import { NotFound } from './routes/NotFound';
import { AppWrapper, Main } from './modules/styled/App';
import styled from 'styled-components';

const headerWrapperStyle = {
  top: 0,
  right: 0,
  left: 0,
  position: 'fixed',
  color: '#fff',
  backgroundColor: '#176BCC',
  transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  zIndex: '1100',
  boxSizing: 'border-box',
  flexShrink: 0,
  flexSirection: 'column',
  boxShadow:
    '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  height: '70px'
};

const HeaderContent = styled.div`
  height: 3em;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
              <div style={headerWrapperStyle}>
                <HeaderContent>Header content</HeaderContent>
              </div>
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
      </Provider>
    );
  }
}

export default App;
