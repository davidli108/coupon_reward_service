import React from 'react';
import InstallOverlay from './InstallOverlay';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<InstallOverlay isActive={true} callback={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
