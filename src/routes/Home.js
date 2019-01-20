import React from 'react';
import { Screen, Container, HomeWrapper } from '../modules/styled/Home';

export const Home = () => (
  <Screen key="Screen" data-testid="ScreenWrapper">
    <Container>
      <HomeWrapper>
        <h2>home</h2>
      </HomeWrapper>
    </Container>
  </Screen>
);
