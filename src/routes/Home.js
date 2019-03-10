import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {
  FaBars,
  FaSortAmountDown,
  FaEllipsisV,
  FaGripHorizontal
} from 'react-icons/fa';
import theme from '../modules/theme';
import { HomeWrapper, Screen } from '../modules/styled/Home';
import Header from '../components/Header';
import Product from '../containers/Product';
import Navigation from '../containers/Navigation';

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
  flex-direction: row;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: 70px;
  z-index: 1201;
`;

const SubHeaderLeft = styled.h3`
  width: 230px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2%;
  color: ${theme.palette.focusedColor} !important;
`;

const SubHeaderRight = styled.div`
  flex-grow: 1;
  height: 100%;
  border-left: ${theme.palette.borderColor} solid 2px;
  display: flex;
  align-items: center;
  padding: 1%;
  justify-content: space-between;
  color: ${theme.palette.focusedColor};
}
`;

const SettingOptions = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Home = () => (
  <Screen key="Screen" data-testid="ScreenWrapper">
    <Header />
    <SubHeader>
      <SubHeaderLeft>Users</SubHeaderLeft>
      <SubHeaderRight>
        <div>All Users</div>
        <SettingOptions>
          <IconContext.Provider value={{ style: { marginRight: '4%' } }}>
            <FaGripHorizontal />
            <FaSortAmountDown />
            <FaBars />
            <FaEllipsisV />
          </IconContext.Provider>
        </SettingOptions>
      </SubHeaderRight>
    </SubHeader>
    <HomeWrapper>
      <Navigation />
      <Product />
    </HomeWrapper>
  </Screen>
);
