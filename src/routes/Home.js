import React from 'react';

import { Container, HomeWrapper, Screen } from '../modules/styled/Home';
import Product from '../containers/Product';

export const Home = () => (
  <Screen key="Screen" data-testid="ScreenWrapper">
    <Container>
      <HomeWrapper>
        <Product />
      </HomeWrapper>
    </Container>
  </Screen>
);
