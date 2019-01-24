import React from 'react';
import {
  Container,
  DisplayNumberSelect,
  Divider,
  HomeWrapper,
  ProductCount,
  ProductGrid,
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
        <Divider />
        <ProductGrid>product grid content</ProductGrid>
      </HomeWrapper>
    </Container>
  </Screen>
);
