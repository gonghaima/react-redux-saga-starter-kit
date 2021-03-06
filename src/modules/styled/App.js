import styled from 'styled-components';
import { appColor, titleColor } from '../theme';

const AppWrapper = styled.div`
  display: flex;
  background-color: ${appColor};
  flex-direction: column;
  min-height: 100vh;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
  h3,
  h5 {
    color: ${titleColor};
  }
`;

const Main = styled.main`
  min-height: 100vh;
`;

export { AppWrapper, Main };
