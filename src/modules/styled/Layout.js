import styled from 'styled-components';
import theme, { borderColor, itemBgColor, shadow } from '../theme';
import { subTitleColor } from '../theme';
import { responsive } from './utils/helpers';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;;
  align-items: center;
  /* stylelint-disable */
  width:100%;
  background: ${theme.palette.primary.appColor}
  box-shadow: ${shadow}
  /* stylelint-enable */
`;

const Content = styled.div`
  width: 98%;
  margin-top: 1%;
  background: #fff;
  box-shadow: ${shadow};
`;

// const ContentHead = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 15px 20px;
//   border-bottom: ${theme.palette.mainBgColor} solid 1px;
// `;
const ContentHead = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: ${theme.palette.mainBgColor} solid 1px;
`;

const ContentList = styled.div`
  display: flex;
  align-items: center;
`;
const ContentListWithBorder = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1%;
  border-bottom: ${theme.palette.mainBgColor} solid 1px;
`;

const ContentListMain = styled.div`
  padding: 15px 0px 15px 20px;
`;

const contentHeadCommonStyle = `font: inherit;
outline: none;
border: 0;
`;

const ContentHeadSearch = styled.input`
  margin-left: 15px;
  ${contentHeadCommonStyle}
`;
const Search = styled.input`
  ${contentHeadCommonStyle}
`;

const ContentListIcon = styled.div`
  flex-grow: 1;
  justify-content: center;
  display: flex;
`;
const ContentListItem = styled.div`
  ${contentHeadCommonStyle}
  flex-grow:9;
  padding: 15px 0px 15px 0px;
  color: ${theme.palette.focusedColor}
  border-bottom: ${theme.palette.mainBgColor} solid 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;
const ContentListItemWithoutBorder = styled.div`
  ${contentHeadCommonStyle}
  flex-grow:9;
  padding: 15px 0px 15px 0px;
`;

const Details = styled.small`
  color: ${theme.palette.titleColor};
  padding-right: ${props => props.right}px;
`;

const iconStyle11 = `    
background: darkgray;
color: lightgray;
border-radius: 9px;
border: 0;`;
const iconStyle = {
  background: 'darkgray',
  color: 'lightgray',
  borderRadius: '9px',
  border: 0
};
export {
  Content,
  ContentWrapper,
  ContentHead,
  ContentList,
  ContentListWithBorder,
  ContentListIcon,
  ContentListItem,
  ContentListItemWithoutBorder,
  ContentHeadSearch,
  Details,
  iconStyle,
  Search
};
