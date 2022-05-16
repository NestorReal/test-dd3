/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Delete from './Delete';

export default {
  title: 'Icons/Delete',
  component: Delete,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Delete>;

const Template: ComponentStory<typeof Delete> = () => <Delete />;

export const Primary = Template.bind({});

Primary.args = {};
