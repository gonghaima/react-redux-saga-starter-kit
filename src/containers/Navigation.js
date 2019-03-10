import React, { Component } from "react";
import { connect } from "react-redux";
import {
  NavigationWrapper,
  NavUl,
  StickyContainer
} from "../modules/styled/Nav";
import {
  FaUserCircle,
  FaStar,
  FaShieldAlt,
  FaUserFriends,
  FaArchive
} from "react-icons/fa";
import NavListItem from "../components/navigation/NavListItem";
export class Navigation extends Component {
  render() {
    const goTo = () => {
      console.log("go to another page");
    };
    const NavItems = [
      { linkText: "All Users", LinkIcon: FaUserCircle, onClick: goTo },
      { linkText: "Favorites", LinkIcon: FaStar, onClick: goTo },
      { linkText: "Administrators", LinkIcon: FaShieldAlt, onClick: goTo },
      { linkText: "Non-Admins", LinkIcon: FaUserFriends, onClick: goTo },
      { linkText: "Archived", LinkIcon: FaArchive, onClick: goTo }
    ];

    return (
      <NavigationWrapper>
        <StickyContainer>
          <NavUl>
            {NavItems.map((item, k) => (
              <NavListItem key={k} {...item} />
            ))}
          </NavUl>
        </StickyContainer>
      </NavigationWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { product: state.product, selection: state.selection };
}

export default connect(mapStateToProps)(Navigation);
