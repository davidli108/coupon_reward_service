// @flow
import * as R from 'ramda';

export const colorScheme = {
  white: { value: '#FFF', name: 'White' },
  black: { value: '#000', name: 'Black' },
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
