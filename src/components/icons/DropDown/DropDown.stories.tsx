/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropDown from './DropDown';

export default {
  title: 'Icons/DropDown',
  component: DropDown,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
