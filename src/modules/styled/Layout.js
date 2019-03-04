import styled from 'styled-components';
import theme, { borderColor, itemBgColor } from '../theme';
import { subTitleColor } from '../theme';
import { responsive } from './utils/helpers';

const ContentWrapper = styled.div`
  /* stylelint-disable */
  width:100%;
  background: ${theme.palette.itemBgColor}
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    ${p =>
      responsive({
        ix: `
        margin-top: 15%;
        margin-left: 43%;
      `,
        md: `
        margin-top: 15%;
        margin-left: 31%;
        margin-right: 3%;
      `,
        lg: `
        margin-top: 11%;
        margin-left: 22%;
        margin-right: 2%;
      `,
        xl: `
        margin-top: 9%;
        margin-left: 18%;
      `
      })};
  /* stylelint-enable */
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

export { ContentWrapper, ContentHead, ContentList };
