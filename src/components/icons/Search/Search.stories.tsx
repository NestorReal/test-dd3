/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from './Search';

export default {
  title: 'Icons/Search',
  component: Search,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
