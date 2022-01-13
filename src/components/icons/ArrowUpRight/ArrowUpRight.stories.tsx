/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArrowUpRight from './ArrowUpRight';

export default {
  title: 'Icons/ArrowUpRight',
  component: ArrowUpRight,
} as ComponentMeta<typeof ArrowUpRight>;

const Template: ComponentStory<typeof ArrowUpRight> = () => <ArrowUpRight />;

export const Primary = Template.bind({});

Primary.args = {};
