import styled from 'styled-components';
import theme from '../theme';

const Screen = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
`;

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

const HomeWrapper = styled.div`
  color: ${theme.palette.titleColor};
`;

const Title = styled.h2`
  margin: 0;
  color: ${theme.palette.titleColor};
`;

export { Screen, Container, HomeWrapper, Title };
