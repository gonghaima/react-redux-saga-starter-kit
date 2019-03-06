import styled from 'styled-components';
import theme, { borderColor, itemBgColor } from '../theme';
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
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  /* stylelint-enable */
`;

const Content = styled.div`
  width: 90%;
  margin-top: 5%;
  background: #fff;
`;

const ContentHead = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 20px;
`;

const ContentList = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 20px;
`;

export { Content, ContentWrapper, ContentHead, ContentList };
