// @flow
import type { StoryDecorator } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const RouterDecorator: StoryDecorator = story => <Router>{story()}</Router>;

export default RouterDecorator;
