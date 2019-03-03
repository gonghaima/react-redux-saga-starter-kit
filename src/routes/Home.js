import React from 'react';
import styled from 'styled-components';
import { FaBars, FaElementor } from 'react-icons/fa';
import theme from '../modules/theme';
import { Container, HomeWrapper, Screen } from '../modules/styled/Home';
import Product from '../containers/Product';
import Navigation from '../containers/Navigation';

const Header = styled.div`
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  color: #fff;
  background-color: #176bcc;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  display: flex;
  align-items: center;
  zindex: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: 70px;
  z-index: 1201;
`;

const HeaderContent = styled.div`
  height: 3em;
  width: 100%;
  height:100%
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
const SubHeader = styled.div`
  top: 70px;
  right: 0;
  left: 0;
  position: fixed;
  color: #fff;
  background-color: ${theme.palette.headerBgColor};
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  display: flex;
  align-items: center;
  zindex: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: 70px;
  z-index: 1201;
`;

const SubHeaderContent = styled.div`
  color: ${theme.palette.focusedColor};
  height: 3em;
  width: 100%;
  height:100%
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
const LeftSection = styled.div`
  width: 140px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Bars = styled.a`
  padding-top: 5px;
`;
const Title = styled.h4``;

export const Home = () => (
  <Screen key="Screen" data-testid="ScreenWrapper">
    <Header>
      <HeaderContent>
        <LeftSection>
          <Bars href="/">
            <FaBars />
          </Bars>
          <Title>Product Name</Title>
        </LeftSection>
        <FaElementor />
      </HeaderContent>
    </Header>
    <SubHeader>
      <SubHeaderContent>
        <Title>Users</Title>
      </SubHeaderContent>
    </SubHeader>
    <HomeWrapper>
      <Navigation />
      <Product />
    </HomeWrapper>
  </Screen>
);
