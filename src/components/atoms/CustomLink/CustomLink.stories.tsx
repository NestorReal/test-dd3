/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomLink from './CustomLink';

export default {
  title: 'Atoms/CustomLink',
  component: CustomLink,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof CustomLink>;

const Template: ComponentStory<typeof CustomLink> = (args) => <CustomLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'This is a link',
  to: '/login',
};
