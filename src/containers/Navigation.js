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
export class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationWrapper>
        <StickyContainer>
          <NavUl>
            <NavLi className="nav-item">
              <NavAnchor className="nav-link active" href="#">
                <NavDiv>
                  <FaUserCircle size={18} />
                </NavDiv>
                <NavDiv>
                  <NavLiText>All Users</NavLiText>
                </NavDiv>
              </NavAnchor>
            </NavLi>
            <NavLi className="nav-item">
              <NavAnchor className="nav-link active" href="#">
                <NavDiv>
                  <FaStar size={18} />
                </NavDiv>
                <NavDiv>
                  <NavLiText>Favorites</NavLiText>
                </NavDiv>
              </NavAnchor>
            </NavLi>
            <NavLi className="nav-item">
              <NavAnchor className="nav-link active" href="#">
                <NavDiv>
                  <FaShieldAlt size={18} />
                </NavDiv>
                <NavDiv>
                  <NavLiText>Administrators</NavLiText>
                </NavDiv>
              </NavAnchor>
            </NavLi>
            <NavLi className="nav-item">
              <NavAnchor className="nav-link active" href="#">
                <NavDiv>
                  <FaUserFriends size={18} />
                </NavDiv>
                <NavDiv>
                  <NavLiText>Non-Admins</NavLiText>
                </NavDiv>
              </NavAnchor>
            </NavLi>
            <NavLi className="nav-item">
              <NavAnchor className="nav-link active" href="#">
                <NavDiv>
                  <FaArchive size={18} />
                </NavDiv>
                <NavDiv>
                  <NavLiText>Archived</NavLiText>
                </NavDiv>
              </NavAnchor>
            </NavLi>
          </NavUl>
          {/* <div>All Users</div>
          <div>Favorites</div>
          <div>Administrators</div>
          <div>Administrators</div>
          <div>Archived</div> */}
        </StickyContainer>
      </NavigationWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { product: state.product, selection: state.selection };
}

export default connect(mapStateToProps)(Navigation);
