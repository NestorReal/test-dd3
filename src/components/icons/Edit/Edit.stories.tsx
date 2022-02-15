/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Edit from './Edit';

export default {
  title: 'Icons/Edit',
  component: Edit,
} as ComponentMeta<typeof Edit>;

const Template: ComponentStory<typeof Edit> = () => <Edit />;

export const Primary = Template.bind({});

Primary.args = {};
