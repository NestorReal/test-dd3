/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stats from './Stats';

export default {
  title: 'Organisms/Stats',
  component: Stats,
} as ComponentMeta<typeof Stats>;

const Template: ComponentStory<typeof Stats> = (args) => <Stats {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  plays: 8,
  victories: 2,
  time: '04:10',
  word: '',
  onChange: () => '',
};
