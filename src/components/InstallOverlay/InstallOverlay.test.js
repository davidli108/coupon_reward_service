import React from 'react';
import InstallOverlay from './InstallOverlay';
import renderer from 'react-test-renderer';
import { initializeI18n } from '../../modules/localization/i18n';
import 'jest-styled-components';

initializeI18n();

it('renders correctly', () => {
  const tree = renderer
    .create(<InstallOverlay isActive={true} callback={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
