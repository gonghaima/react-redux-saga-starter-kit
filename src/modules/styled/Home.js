import styled from 'styled-components';
import theme from '../theme';
import { subTitleColor } from '../../modules/theme';

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

const Screen = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
`;

const HomeWrapper = styled.div`
  color: ${theme.palette.titleColor};
`;
const ProductCount = styled.span`
  vertical-align: sub;
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
  Summary,
  SummaryItem,
  Title
};
