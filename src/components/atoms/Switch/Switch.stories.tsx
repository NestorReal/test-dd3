/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from './Switch';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  argTypes: { onChange: { action: 'clicked' } },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  labels: ['off', 'on'],
};
