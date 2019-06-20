// @flow
import * as R from 'ramda';

export const colorScheme = {
  white: { value: '#FFF', name: 'White' },
  whiteDark: { value: '#ADB8C0', name: 'WhiteDark' },
  whiteLight: { value: '#DADDE2', name: 'WhiteLight' },
  whiteExLight: { value: '#F9FAFC', name: 'WhiteExLight' },
  black: { value: '#000', name: 'Black' },
  blackGray: { value: '#434343', name: 'BlackGray' },
  darkGray: { value: '#62707B', name: 'DarkGray' },
  blackLight: { value: '#374B5A', name: 'BlackLight' },
  blackAlpha: { value: 'rgba(0, 0, 0, 0.2)', name: 'BlackAlpha' },
  blackAlphaDark: { value: 'rgba(0, 0, 0, 0.5)', name: 'BlackAlphaDark' },
  blackExLight: { value: '#899197', name: 'BlackExLight' },
  blueFacebook: { value: '#3b5998', name: 'BlueFacebook' },
  blue: { value: '#00CBE9', name: 'Blue' },
  blueDark: { value: '#00B4CF', name: 'BlueDark' },
  blueExDark: { value: '#337ab7', name: 'BlueExDark' },
  gray: { value: '#D4D4D4', name: 'Gray' },
  grayLight: { value: '#C2C2C2', name: 'GrayLight' },
  grayDark: { value: '#7F7F7F', name: 'GrayDark' },
  grayTintsDark: { value: '#B1B1B1', name: 'GrayTintsDark' },
  pink: { value: '#ef65a0', name: 'Ping' },
  pinkLight: { value: '#F76171', name: 'PinkLight' },
  pinkDark: { value: '#ee5797', name: 'PinkDark' },
  modalOverlayBg: { value: 'rgba(70, 73, 77, .93)', name: 'ModalOverlayBg' },
};
export const getColor = (colorKey: string) =>
  R.path([colorKey, 'value'], colorScheme);

const getColorsMap = () =>
  R.compose(
    R.reduce((acc, [key, scheme]) => R.assoc(key, scheme.value, acc), {}),
    R.toPairs,
  )(colorScheme);

const colors = getColorsMap();

export default colors;
