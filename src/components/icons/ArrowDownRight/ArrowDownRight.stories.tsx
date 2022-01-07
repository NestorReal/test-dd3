/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArrowDownRight from './ArrowDownRight';

export default {
  title: 'Icons/ArrowDownRight',
  component: ArrowDownRight,
} as ComponentMeta<typeof ArrowDownRight>;

const Template: ComponentStory<typeof ArrowDownRight> = () => <ArrowDownRight />;

export const Primary = Template.bind({});

Primary.args = {};
