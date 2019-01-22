import React from 'react';
import { Screen, Container, HomeWrapper, Title } from '../modules/styled/Home';

export const Home = () => (
  <Screen key="Screen" data-testid="ScreenWrapper">
    <Container>
      <HomeWrapper>
        <Title>Home</Title>
      </HomeWrapper>
    </Container>
  </Screen>
);
