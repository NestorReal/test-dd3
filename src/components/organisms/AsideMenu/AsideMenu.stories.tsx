/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AsideMenu from './AsideMenu';

export default {
  title: 'Organisms/AsideMenu',
  component: AsideMenu,
  argTypes: {
    location: {
      options: ['dashboard', 'locations'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof AsideMenu>;

const Template: ComponentStory<typeof AsideMenu> = (args) => <AsideMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Main Menu',
};
