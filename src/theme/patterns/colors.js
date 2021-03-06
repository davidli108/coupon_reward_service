// @flow
import * as R from 'ramda';

export const colorScheme = {
  white: { value: '#FFF', name: 'White' },
  whiteDark: { value: '#EAEAEA', name: 'WhiteDark' },
  whitebg: { value: '#F2F2F2', name: 'WhiteBg' },
  whiteLight: { value: '#DADDE2', name: 'WhiteLight' },
  whiteExLight: { value: '#F9FAFC', name: 'WhiteExLight' },
  whiteEnLight: { value: '#fefff4', name: 'WhiteEnLight' },
  whitenLight: { value: '#f0f1f4', name: 'whitenLight' },
  black: { value: '#000', name: 'Black' },
  blackGrey: { value: '#29343C', name: 'BlackGrey' },
  blackGray: { value: '#434343', name: 'BlackGray' },
  darkGray: { value: '#62707B', name: 'DarkGray' },
  blackLight: { value: '#374B5A', name: 'BlackLight' },
  blackSecondary: { value: '#374b5a', name: 'BlackSecondary' },
  blackAlpha: { value: 'rgba(0, 0, 0, 0.2)', name: 'BlackAlpha' },
  greenMain: { value: '#2c9e25', name: 'GreenMain' },
  greenLight: { value: '#f5fff4', name: 'GreenLight' },
  greenWhite: { value: '#e2e2e2', name: 'GreenWhite' },
  greenBlank: { value: '#00ba4a', name: 'GreenBlank' },
  greenSecondary: { value: '#5dcf56', name: 'GreenSecondary' },
  blueBlanknew: { value: '#374b5a', name: 'BlueBlankNew' },
  blueBg: { value: '#F4F4F4', name: 'BlueBg' },
  blackAlphaDark: {
    value: 'rgba(0, 0, 0, 0.5)',
    name: 'BlackAlphaDark',
  },
  blackExLight: { value: '#899197', name: 'BlackExLight' },
  blueFacebook: { value: '#3b5998', name: 'BlueFacebook' },
  blue: { value: '#00CBE9', name: 'Blue' },
  blueDark: { value: '#00B4CF', name: 'BlueDark' },
  blueExDark: { value: '#337ab7', name: 'BlueExDark' },
  gray: { value: '#D4D4D4', name: 'Gray' },
  graySecondary: { value: '#F4F4F4', name: 'GraySecondary' },
  grayContrast: { value: '#F9F9F9', name: 'grayContrast' },
  grayPill: { value: '#F7F8FC', name: 'grayPill' },
  grayLight: { value: '#C2C2C2', name: 'GrayLight' },
  grayDark: { value: '#7F7F7F', name: 'GrayDark' },
  grayTintsDark: { value: '#B1B1B1', name: 'GrayTintsDark' },
  lightDark: { value: '#b3bbc2', name: 'LightDark' },
  pink: { value: '#ef65a0', name: 'Ping' },
  pinkLight: { value: '#F76171', name: 'PinkLight' },
  pinkDark: { value: '#ee5797', name: 'PinkDark' },
  orangeDark: { value: '#E9B600', name: 'orangeDark' },
  red: { value: '#f10101', name: 'red' },
  skyBlue: { value: '#34a6bf', name: 'SkyBlue' },
  skyDarkBlue: { value: '#29899e', name: 'SkyDarkBlue' },
  skyLightBlue: { value: '#02a6bf', name: 'SkyLightBlue' },
  skyLightDark: { value: '#01899e', name: 'SkyLightDark' },
  darkSky: { value: '#adb8c0', name: 'DarkSky' },
  darkGrayBlank: { value: '#a7a7a7', name: 'DarkGrayBlank' },
  darkBlueBlank: { value: '#e3e6e9', name: 'DarkBlueBlank' },
  darkBlank: { value: '#bdbdbd', name: 'DarkBlank' },
  grayBlank: { value: '#e9e9e9', name: 'GrayBlank' },
  bloodRed: { value: '#bb2333', name: 'BloodRed' },
  modalOverlayBg: {
    value: 'rgba(70, 73, 77, .93)',
    name: 'ModalOverlayBg',
  },
  lightBlue: { value: '#8ba8af', name: 'LightBlue' },
  darkBlue: { value: '#001c20', name: 'DarkBlue' },
  lightGreen: { value: '#56b559', name: 'LightGreen' },
  lightGreenHover: { value: '#2c9e25', name: 'LightGreenHover' },
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
