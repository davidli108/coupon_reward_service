import { storiesOf } from '@storybook/react';
import React from 'react';

import BackgroundsDecorator from '@modules/storybook/decorators/BackgroundsDecorator';
import StyledComponentsDecorator from '@modules/storybook/decorators/StyledComponentsDecorator';
import { colorScheme } from '@theme/patterns/colors';

import ColorTile from './ColorTile';

const ColorScheme = () => {
  const [copiedColor, setCopiedColor] = React.useState({}); // eslint-disable-line no-unused-vars

  const notifyColorCopy = (label, color) => {
    setCopiedColor({ label, color });
  };

  return (
    <div>
      <h2 style={{ margin: '20px 10px', fontFamily: 'Roboto' }}>Color</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.entries(colorScheme).map(([name, scheme]) => (
          <ColorTile
            key={name}
            color={scheme.value}
            label={scheme.name}
            name={name}
            onCopy={notifyColorCopy}
          />
        ))}
      </div>
    </div>
  );
};

storiesOf('@Overview|@Patterns', module)
  .addDecorator(BackgroundsDecorator)
  .addDecorator(StyledComponentsDecorator)
  .add('Color', () => <ColorScheme />);
