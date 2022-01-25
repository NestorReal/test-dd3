/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Main from './Main';

export default {
  title: 'Layouts/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const Primary = Template.bind({});

Primary.args = {};
