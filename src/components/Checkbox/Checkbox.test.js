// @flow
import { mount } from 'enzyme/build';
import 'jest-styled-components';

import { styled, wrapComponent } from '@config/TestUtilities';
import Checkbox from './index';

describe('Checkbox component test', () => {
  it('renders without errors', () => {
    const props = {
      checked: false,
      label: 'test',
      right: false,
    };
    const wrapper = mount(wrapComponent(Checkbox, props));

    expect(wrapper.find(styled('Checkbox.Box')).exists()).toBe(true);
  });
});
