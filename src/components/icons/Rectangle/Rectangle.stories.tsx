/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Rectangle from './Rectangle';

export default {
  title: 'Icons/Rectangle',
  component: Rectangle,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Rectangle>;

const Template: ComponentStory<typeof Rectangle> = () => <Rectangle />;

export const Primary = Template.bind({});

Primary.args = {};
