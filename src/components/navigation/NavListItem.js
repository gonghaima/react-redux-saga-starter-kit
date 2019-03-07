import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavAnchor, NavDiv, NavLi, NavLiText } from '../../modules/styled/Nav';

const NavListItem = ({ linkText, LinkIcon, onClick }) => {
  return (
    <NavLi className="nav-item" onClick={onClick}>
      <NavAnchor className="nav-link active" href="#">
        <NavDiv>
          <LinkIcon size={18} />
        </NavDiv>
        <NavDiv>
          <NavLiText>{linkText}</NavLiText>
        </NavDiv>
      </NavAnchor>
    </NavLi>
  );
};

export default NavListItem;
