import styled from 'styled-components';
import theme from '../theme';
import { subTitleColor } from '../../modules/theme';
import { responsive } from '../../modules/styled/utils/helpers';

const Container = styled.div`
  @media (min-width: ${theme.breakpoints[1]}px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 64px;
    padding-top: 64px;
  }

  @media (min-width: ${theme.breakpoints[2]}px) {
    padding-bottom: 64px;
    padding-top: 64px;
  }

  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  position: relative;
  width: 100%;
  padding: 16px;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const DisplayNumberSelect = styled.select`
  color: ${theme.palette.selectColor};
  box-sizing: border-box;
  border: 0;
  border-radius: 2px;
  display: block;
  height: 28px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1;
  padding: 6px;
  white-space: nowrap;
  width: 100%;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  margin: 0em;
  box-sizing: border-box;
`;

const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${theme.palette.borderColor};
  margin: 0.7em 0.4em;
  padding: 0;
`;
const HomeWrapper = styled.div`
  color: ${theme.palette.titleColor};
`;

const Screen = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
`;

const ProductCount = styled.span`
  vertical-align: sub;
`;
const ProductGrid = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${theme.spacer[2]};
  grid-template-columns: 100%;
  list-style: none;
  margin: 0px ${theme.spacer[4]} auto 0;
  padding: 0;
  /* stylelint-disable */
  ${/* istanbul ignore next */ p =>
    responsive({
      ix: `
        grid-gap: ${theme.spacer[3]};
        width: 90%;
      `,
      md: `
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
      `,
      lg: `
        grid-template-columns: repeat(3, 1fr);
      `,
      xl: `
        grid-gap: ${theme.spacer[4]};
        grid-template-columns: repeat(4, 1fr);
      `
    })};
  /* stylelint-enable */

  > li {
    display: flex;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: ${theme.palette.titleColor};
`;

const Summary = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  color: ${subTitleColor};
`;
const SummaryItem = styled.div`
  margin: 0;
  width: 10%;
`;

export {
  Container,
  DisplayNumberSelect,
  Divider,
  HomeWrapper,
  Screen,
  ProductCount,
  ProductGrid,
  Summary,
  SummaryItem,
  Title
};
