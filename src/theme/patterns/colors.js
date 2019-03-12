// @flow
import * as R from 'ramda';

export const colorScheme = {
  white: { value: '#FFF', name: 'White' },
  black: { value: '#000', name: 'Black' },
  blue: { value: '#00CBE9', name: 'Blue' },
  greyLight: { value: '#c2c2c2', name: 'GrayLight' },
  greyDark: { value: '#d4d4d4', name: 'GrayDark' },
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
