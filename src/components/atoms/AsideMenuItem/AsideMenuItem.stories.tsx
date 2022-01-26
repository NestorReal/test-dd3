/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AsideMenuItem from './AsideMenuItem';

export default {
  title: 'Atoms/AsideMenuItem',
  component: AsideMenuItem,
} as ComponentMeta<typeof AsideMenuItem>;

const Template: ComponentStory<typeof AsideMenuItem> = (args) => <AsideMenuItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: 'Dashboard',
  to: 'dashborad',
};
