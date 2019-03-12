// @flow
import * as R from 'ramda';

export const colorScheme = {
  white: { value: '#FFF', name: 'White' },
  whiteDark: { value: '#ADB8C0', name: 'WhiteDark' },
  whiteLight: { value: '#DADDE2', name: 'WhiteLight' },
  whiteExLight: { value: '#F9FAFC', name: 'WhiteExLight' },
  black: { value: '#000', name: 'Black' },
  blackLight: { value: '#374B5A', name: 'BlackLight' },
  blackAlpha: { value: 'rgba(0, 0, 0, 0.2)', name: 'BlackAlpha' },
  blackExLight: { value: '#899197', name: 'BlackExLight' },
  blue: { value: '#00CBE9', name: 'Blue' },
  blueDark: { value: '#00B4CF', name: 'BlueDark' },
  gray: { value: '#D4D4D4', name: 'Gray' },
  grayLight: { value: '#C2C2C2', name: 'GrayLight' },
  grayDark: { value: '#7F7F7F', name: 'GrayDark' },
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
