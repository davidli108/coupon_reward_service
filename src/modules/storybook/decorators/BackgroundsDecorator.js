// @flow
import { withBackgrounds } from '@storybook/addon-backgrounds';

const BackgroundsDecorator = withBackgrounds([
  { name: 'white', value: '#FFF', default: true },
  { name: 'light gray', value: '#F7F7F7' },
  { name: 'dark gray', value: '#2D343A' },
]);

export default BackgroundsDecorator;
