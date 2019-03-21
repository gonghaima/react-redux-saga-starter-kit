import React from "react";
import { IconContext } from "react-icons";
import {
  FaBars,
  FaSortAmountDown,
  FaEllipsisV,
  FaGripHorizontal
} from "react-icons/fa";
import theme from "../modules/theme";
import {
  HomeWrapper,
  Screen,
  SubHeader,
  SubHeaderLeft,
  SubHeaderRight,
  SettingOptions
} from "../modules/styled/Home";
import Header from "../components/header/index";
import Product from "../containers/Product";
import Navigation from "../containers/Navigation";

export const Home = () => (
  <Screen key="Screen" data-testid="ScreenWrapper">
    <Header />
    <SubHeader>
      <SubHeaderLeft>Users</SubHeaderLeft>
      <SubHeaderRight>
        <div>All Users</div>
        <SettingOptions>
          <IconContext.Provider value={{ style: { marginRight: "4%" } }}>
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
