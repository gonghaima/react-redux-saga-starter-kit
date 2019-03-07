import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  NavAnchor,
  NavigationWrapper,
  NavDiv,
  NavUl,
  StickyContainer,
  NavLi,
  NavLiText
} from '../modules/styled/Nav';
import {
  FaUserCircle,
  FaStar,
  FaShieldAlt,
  FaUserFriends,
  FaArchive
} from 'react-icons/fa';
import NavListItem from '../components/navigation/NavListItem';
export class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NavItems = [
      { linkText: 'All Users', LinkIcon: FaUserCircle, onClick: goTo },
      { linkText: 'Favorites', LinkIcon: FaStar, onClick: goTo },
      { linkText: 'Administrators', LinkIcon: FaShieldAlt, onClick: goTo },
      { linkText: 'Non-Admins', LinkIcon: FaUserFriends, onClick: goTo },
      { linkText: 'Archived', LinkIcon: FaArchive, onClick: goTo }
    ];
    const goTo = () => {
      console.log('go to another page');
    };
    return (
      <NavigationWrapper>
        <StickyContainer>
          <NavUl>
            {NavItems.map(item => (
              <NavListItem {...item} />
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
