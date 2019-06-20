// @flow
import type { StoryDecorator } from '@storybook/react';
import React from 'react';
import { reduxForm } from 'redux-form';

const Form = ({ story }) => <form>{story()}</form>;

const ReduxFormDecoratorWrapped = reduxForm({
  form: 'ReduxFormDecorator',
})(Form);

const ReduxFormDecorator: StoryDecorator = story => (
  <ReduxFormDecoratorWrapped story={story} />
);

export default ReduxFormDecorator;
