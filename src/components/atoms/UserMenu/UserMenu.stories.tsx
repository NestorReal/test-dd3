/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserMenu from './UserMenu';

export default {
  title: 'Atoms/UserMenu',
  component: UserMenu,
  argTypes: { onCloseSession: { action: 'close session!' } },
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = (args) => <UserMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  open: false,
};
