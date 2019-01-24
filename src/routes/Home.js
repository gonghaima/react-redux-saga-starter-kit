import React from 'react';
import {
  Container,
  DisplayNumberSelect,
  Divider,
  HomeWrapper,
  Item,
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
        <ProductGrid>
          <li>
            <Item>Item content1</Item>
          </li>
          <li>
            <Item>Item content2</Item>
          </li>
          <li>
            <Item>Item content3</Item>
          </li>
        </ProductGrid>
      </HomeWrapper>
    </Container>
  </Screen>
);
