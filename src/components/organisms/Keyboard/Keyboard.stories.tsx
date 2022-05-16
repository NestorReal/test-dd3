/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Keyboard from './Keyboard';

export default {
  title: 'Organisms/Keyboard',
  component: Keyboard,
} as ComponentMeta<typeof Keyboard>;

const Template: ComponentStory<typeof Keyboard> = () => <Keyboard />;

export const Primary = Template.bind({});

Primary.args = {};
