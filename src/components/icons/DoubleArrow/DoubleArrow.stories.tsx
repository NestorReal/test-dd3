/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DoubleArrow from './DoubleArrow';

export default {
  title: 'Icons/DoubleArrow',
  component: DoubleArrow,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof DoubleArrow>;

const Template: ComponentStory<typeof DoubleArrow> = (args) => <DoubleArrow {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
