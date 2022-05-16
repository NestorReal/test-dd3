/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Info from './Info';

export default {
  title: 'Icons/Info',
  component: Info,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = () => <Info />;

export const Primary = Template.bind({});

Primary.args = {};
