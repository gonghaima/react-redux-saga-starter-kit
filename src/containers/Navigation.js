import React, { Component } from "react";
import { connect } from "react-redux";
import { filterUsers } from "../actions";
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
    const goTo = path => {
      this.props.dispatch(filterUsers("Test filter string"));
      console.log(`--${path}--`);
    };
    const NavItems = [
      {
        linkText: "All Users",
        path: "all",
        LinkIcon: FaUserCircle
      },
      {
        linkText: "Favorites",
        path: "favorites",
        LinkIcon: FaStar
      },
      {
        linkText: "administrator",
        path: "administrator",
        LinkIcon: FaShieldAlt
      },
      {
        linkText: "Non-Admins",
        path: "non-admin",
        LinkIcon: FaUserFriends
      },
      {
        linkText: "Archived",
        path: "archived",
        LinkIcon: FaArchive
      }
    ];

    return (
      <NavigationWrapper>
        <StickyContainer>
          <NavUl>
            {NavItems.map((item, i) => (
              <NavListItem key={i} onClick={goTo} {...item} />
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
