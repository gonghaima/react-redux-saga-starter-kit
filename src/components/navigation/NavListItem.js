import React from "react";
import { NavAnchor, NavDiv, NavLi, NavLiText } from "../../modules/styled/Nav";

const NavListItem = ({ linkText, path, LinkIcon, onClick }) => {
  return (
    <NavLi className="nav-item" onClick={onClick(path)}>
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
