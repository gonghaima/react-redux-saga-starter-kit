import styled from 'styled-components';
import theme, { borderColor, itemBgColor } from '../theme';
import { subTitleColor } from '../theme';
import { responsive } from './utils/helpers';

const ContentWrapper = styled.div`
  /* stylelint-disable */
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

export { ContentWrapper };
