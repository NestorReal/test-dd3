/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UpDown from './UpDown';

export default {
  title: 'Atoms/UpDown',
  component: UpDown,
} as ComponentMeta<typeof UpDown>;

const Template: ComponentStory<typeof UpDown> = (args) => <UpDown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: 5,
  typography: 'caps2Bold',
};
