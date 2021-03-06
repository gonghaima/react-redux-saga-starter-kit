export const headerHeight = 70;

export const appColor = '#f6f6f6';
export const mainBgColor = '#f6f8fa';
export const borderColor = '#E5E5E5';
export const titleColor = '#6A6A6A';
export const subTitleColor = '#BFBFBF';
export const space = [0, 4, 8, 16, 32, 64, 128];
export const selectColor = '#7a7a7a';
export const focusedColor = '#272727';
export const anchorHoverColor = '#337ab7';
export const itemBgColor = '#ffffff';

export const easing = 'cubic-bezier(0.35, 0.01, 0.77, 0.34);';

export default {
  breakpoints: [400, 768, 1024, 1280, 1920],
  palette: {
    primary: appColor,
    mainBgColor,
    borderColor,
    titleColor,
    selectColor,
    subTitleColor,
    focusedColor,
    anchorHoverColor,
    itemBgColor
  },
  button: {
    borderRadius: {
      xs: 4,
      lg: 28,
      xl: 32
    },
    padding: {
      lg: [12, 28],
      xl: [14, 32]
    }
  },
  spacer: space.map(c => c + 'px')
};
