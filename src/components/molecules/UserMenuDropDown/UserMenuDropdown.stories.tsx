/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserMenuDropDown from './UserMenuDropDown';

export default {
  title: 'Molecules/UserMenuDropDown',
  component: UserMenuDropDown,
  argTypes: { onCloseSession: { action: 'close session!' } },
} as ComponentMeta<typeof UserMenuDropDown>;

const Template: ComponentStory<typeof UserMenuDropDown> = (args) => <UserMenuDropDown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  userName: 'Emmanuel',
};
