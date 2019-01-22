import React from 'react';
import {
  Container,
  DisplayNumberSelect,
  HomeWrapper,
  ProductCount,
  Screen,
  Summary,
  SummaryItem,
  Title
} from '../modules/styled/Home';

export const Home = () => (
  <Screen key="Screen" data-testid="ScreenWrapper">
    <Container>
      <HomeWrapper>
        <Title>Home</Title>
        <Summary>
          <SummaryItem>
            <ProductCount>1000 Products</ProductCount>
          </SummaryItem>
          <SummaryItem>
            <DisplayNumberSelect>
              <option>4 per page</option>
              <option>16 per page</option>
              <option>32 per page</option>
              <option>64 per page</option>
            </DisplayNumberSelect>
          </SummaryItem>
        </Summary>
      </HomeWrapper>
    </Container>
  </Screen>
);
