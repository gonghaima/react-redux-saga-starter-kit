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
export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.filterUser = this.filterUser.bind(this);
  }

  filterUser = path => () => {
    console.log(path);
    this.props.dispatch(filterUsers(path));
  };
  render() {
    return (
      <NavigationWrapper>
        <StickyContainer>
          <NavUl>
            {NavItems.map((item, i) => (
              <NavListItem key={i} navigate={this.filterUser} {...item} />
            ))}
          </NavUl>
        </StickyContainer>
      </NavigationWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,
    selection: state.selection,
    users: state.users
  };
}

export default connect(mapStateToProps)(Navigation);
