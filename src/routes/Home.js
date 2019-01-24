import React from 'react';
import {
  Container,
  DetailsSection,
  DisplayNumberSelect,
  Divider,
  HomeWrapper,
  Image,
  ImageSection,
  Item,
  ItemPrice,
  ItemTitle,
  ItemDescription,
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
            <Item>
              <ImageSection>
                <Image
                  src="http://dummyimage.com/307x328.bmp/ff4444/ffffff"
                  alt="alt"
                />
              </ImageSection>
              <DetailsSection>
                <ItemTitle>Item Title</ItemTitle>
                <ItemDescription>Item Description</ItemDescription>
                <ItemPrice>$87.68</ItemPrice>
              </DetailsSection>
            </Item>
          </li>
          <li>
            <Item>
              <ImageSection>
                <Image
                  src="http://dummyimage.com/345x342.jpg/dddddd/000000"
                  alt="alt"
                />
              </ImageSection>
              <DetailsSection>
                <ItemTitle>Item Title</ItemTitle>
                <ItemDescription>Item Description</ItemDescription>
                <ItemPrice>$87.68</ItemPrice>
              </DetailsSection>
            </Item>
          </li>
          <li>
            <Item>
              <ImageSection>
                <Image
                  src="http://dummyimage.com/318x336.png/5fa2dd/ffffff"
                  alt="alt"
                />
              </ImageSection>
              <DetailsSection>
                <ItemTitle>Item Title</ItemTitle>
                <ItemDescription>Item Description</ItemDescription>
                <ItemPrice>$87.68</ItemPrice>
              </DetailsSection>
            </Item>
          </li>
        </ProductGrid>
      </HomeWrapper>
    </Container>
  </Screen>
);
