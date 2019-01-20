import styled from 'styled-components';

const Screen = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
`;

const Container = styled.div`
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 64px;
    padding-top: 64px;
  }

  @media (min-width: 1024px) {
    padding-bottom: 64px;
    padding-top: 64px;
  }

  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  position: relative;
  width: 100%;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const HomeWrapper = styled.div`
  h2 {
    margin: 0;
  }
`;

export { Screen, Container, HomeWrapper };
