/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ForgotPassword from './ForgotPassword';

const data = { email: 'emmanuel@lytica.com' };

// eslint-disable-next-line no-promise-executor-return
const aBackendCall = (ms: number) => new Promise((resolve) => setTimeout(() => {
  resolve(data);
}, ms));

export default {
  title: 'Molecules/ForgotPassword',
  component: ForgotPassword,
} as ComponentMeta<typeof ForgotPassword>;

const Template: ComponentStory<typeof ForgotPassword> = (args) => <ForgotPassword {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  link: '',
  onSubmit: () => aBackendCall(2000),
};
