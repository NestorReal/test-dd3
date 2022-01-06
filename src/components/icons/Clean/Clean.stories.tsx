/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Clean from './Clean';

export default {
  title: 'Icons/Clean',
  component: Clean,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Clean>;

const Template: ComponentStory<typeof Clean> = (args) => <Clean {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
