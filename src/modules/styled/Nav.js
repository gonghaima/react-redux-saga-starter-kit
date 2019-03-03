import styled from 'styled-components';
import theme, { borderColor, itemBgColor } from '../theme';
import { subTitleColor } from '../../modules/theme';
import { responsive } from '../../modules/styled/utils/helpers';

const NavigationWrapper = styled.nav`
  background-color: ${theme.palette.itemBgColor};
  width: 230px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 148px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
`;
const StickyContainer = styled.div`
  position: sticky;
`;

const NavUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
const NavLi = styled.li`
  display: flex;
  box-sizing: border-box;
  padding-top: 11px;
  padding-bottom: 11px;
  &:hover {
    background: ${theme.palette.headerBgColor};
    cursor: pointer;
  }
`;

const NavAnchor = styled.a`
  display: flex;
  color: ${theme.palette.focusedColor};
  padding: 6px 0px 6px 40px;
`;
const NavDiv = styled.div``;
const NavLiText = styled.span`
  padding-left: 10px;
`;

export {
  NavigationWrapper,
  StickyContainer,
  NavAnchor,
  NavDiv,
  NavLiText,
  NavUl,
  NavLi
};
